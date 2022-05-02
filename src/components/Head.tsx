import { default as NextHead } from "next/head";

function Head({ title }: { title: string }) {
  return (
    <NextHead>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/__ENV.js" />
    </NextHead>
  );
}

export default Head;