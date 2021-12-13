import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
