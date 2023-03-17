import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 
export default MyApp;