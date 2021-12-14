import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <div className="grid gap-12">
        <Header title={'Tatuering Stockholm'} />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
