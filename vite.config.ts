import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { rmSync, writeFileSync } from "fs";
import { componentTagger } from "lovable-tagger";
import {
  localEdgePlugin,
  localSpiderPlugin,
  localTrackingPlugin,
} from "./server/edge/vitePlugin";
import {
  buildMetaPixelHeadHtml,
  resolveMetaPixelId,
} from "./src/lib/metaPixelHtml";

const htmlEnvPlugin = (env: Record<string, string>): Plugin => ({
  name: "html-env-transform",
  transformIndexHtml(html) {
    const values = {
      VITE_SITE_NAME: env.VITE_SITE_NAME || "Vacations Bookings",
      VITE_SITE_OPERATOR: env.VITE_SITE_OPERATOR || "Big Edition",
      VITE_SITE_DOMAIN: env.VITE_SITE_DOMAIN || "vacations-bookings.com",
      VITE_SITE_TAGLINE: env.VITE_SITE_TAGLINE || "Find your next vacation stay",
    };

    let result = Object.entries(values).reduce(
      (output, [key, value]) => output.replaceAll(`__${key}__`, value),
      html
    );

    const metaPixelId = resolveMetaPixelId(env);
    const testEventCode = env.VITE_META_PIXEL_TEST_EVENT_CODE?.trim();
    result = result.replace(
      "__META_PIXEL_BLOCK__",
      metaPixelId
        ? buildMetaPixelHeadHtml(metaPixelId, testEventCode || undefined)
        : ""
    );

    return result;
  },
});

/** Keep full-res masters in public/ for re-optimize, but never ship them. */
const omitUnoptimizedCityHeroesPlugin = (): Plugin => ({
  name: "omit-unoptimized-city-heroes",
  closeBundle() {
    rmSync(path.resolve(__dirname, "dist/images/city-heroes"), {
      recursive: true,
      force: true,
    });
  },
});

const webManifestPlugin = (env: Record<string, string>): Plugin => {
  const buildManifest = () => ({
    name: env.VITE_SITE_NAME || "Vacations Bookings",
    short_name: env.VITE_SITE_SHORT_NAME || "VacationsBookings",
    description: "Compare hotel and rental prices worldwide.",
    icons: [
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    theme_color: "#1A6B9A",
    background_color: "#F9F7F4",
    display: "standalone",
  });

  return {
    name: "generate-webmanifest",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.split("?")[0] === "/site.webmanifest") {
          res.setHeader("Content-Type", "application/manifest+json");
          res.end(`${JSON.stringify(buildManifest(), null, 2)}\n`);
          return;
        }
        next();
      });
    },
    closeBundle() {
      writeFileSync(
        path.resolve(__dirname, "dist/site.webmanifest"),
        `${JSON.stringify(buildManifest(), null, 2)}\n`
      );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const useLocalEdge = mode === "development" && env.VITE_LOCAL_EDGE !== "false";
  const useApiProxy = env.VITE_USE_API_PROXY === "true" && !useLocalEdge;
  // Production defaults to /api/edge proxy (same path as local edge) so the browser
  // does not need VITE_SUPABASE_* baked in. Opt out with VITE_USE_EDGE_PROXY=false.
  const useEdgeProxy =
    env.VITE_USE_EDGE_PROXY === "true" ||
    (mode === "production" && env.VITE_USE_EDGE_PROXY !== "false");
  const useEdgeProxyClient = useLocalEdge || useApiProxy || useEdgeProxy;
  const supabaseUrl = env.SUPABASE_URL || env.VITE_SUPABASE_URL;
  const anonKey = env.SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY;

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
      ...(useApiProxy && supabaseUrl
        ? {
            proxy: {
              "/api/edge": {
                target: supabaseUrl,
                changeOrigin: true,
                rewrite: (requestPath) =>
                  requestPath.replace(/^\/api\/edge\//, "/functions/v1/"),
                configure: (proxy) => {
                  proxy.on("proxyReq", (proxyReq) => {
                    if (anonKey) {
                      proxyReq.setHeader("Authorization", `Bearer ${anonKey}`);
                      proxyReq.setHeader("apikey", anonKey);
                    }
                  });
                },
              },
            },
          }
        : {}),
    },
    plugins: [
      react(),
      htmlEnvPlugin(env),
      webManifestPlugin(env),
      omitUnoptimizedCityHeroesPlugin(),
      mode === "development" && localTrackingPlugin(),
      mode === "development" && localSpiderPlugin(),
      useLocalEdge && localEdgePlugin(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: [
        ...(useEdgeProxyClient
          ? [
              {
                find: "@/lib/edgeFunctionClient",
                replacement: path.resolve(
                  __dirname,
                  "./src/lib/edgeFunctionClient.proxy.ts"
                ),
              },
            ]
          : []),
        // Alternate brands (VITE_USE_API_PROXY): skip DB writes. Local edge keeps
        // landings/search tracking via /api/landings and /api/search.
        ...(useApiProxy
          ? [
              {
                find: "@/lib/landingTrackingService",
                replacement: path.resolve(
                  __dirname,
                  "./src/lib/landingTrackingService.proxy.ts"
                ),
              },
              {
                find: "@/lib/partnerClickTracking",
                replacement: path.resolve(
                  __dirname,
                  "./src/lib/partnerClickTracking.proxy.ts"
                ),
              },
            ]
          : []),
        {
          find: "@",
          replacement: path.resolve(__dirname, "./src"),
        },
      ],
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: ["@radix-ui/react-dialog"],
    },
  };
});
