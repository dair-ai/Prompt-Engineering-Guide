import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-ST7R3WQ353"/>
<Script>{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ST7R3WQ353');
`}
</Script>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 
export default MyApp;