import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "tailwindcss/tailwind.css";
import getConfig from "@/configuration/configuration";

function App({ Component, pageProps }: AppProps) {
  const config = getConfig();
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
          site_name: config.blogName
        }}
        twitter={{
          cardType: "summary_large_image"
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      config: getConfig()
    }
  };
}

export default App;
