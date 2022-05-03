import { default as NextHead } from "next/head";
import Script from "next/script";

function Head({ title }: { title: string }) {
  return (
    <NextHead>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="/__ENV.js" strategy="beforeInteractive" />
    </NextHead>
  );
}

export default Head;