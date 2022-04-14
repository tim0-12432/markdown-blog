import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { configuration as config } from '../config/configuration';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={config.blogName}
        description={config.blogDescription}
        canonical={process.env.SITE_URL}
        openGraph={{
          url: process.env.SITE_URL,
          title: config.blogName,
          description: config.blogDescription,
          images: [],
          site_name: config.blogName,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
