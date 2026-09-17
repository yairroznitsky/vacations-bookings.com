export const DEFAULT_META_PIXEL_ID = "1630910692162348";

export const resolveMetaPixelId = (
  env: Record<string, string | undefined>
): string => {
  const value = env.VITE_META_PIXEL_ID;
  if (value !== undefined) return value.trim();
  return DEFAULT_META_PIXEL_ID;
};

/** Official Meta Pixel base snippet for `<head>` (init only; PageView via SPA router). */
export const buildMetaPixelHeadHtml = (
  pixelId: string,
  testEventCode?: string
): string => {
  const initExtra = testEventCode
    ? `, {}, { testEventCode: '${testEventCode.replace(/'/g, "\\'")}' }`
    : "";

  return `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}'${initExtra});
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->`;
};
