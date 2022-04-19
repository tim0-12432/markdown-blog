import { default as NextHead } from "next/head";

function Head({ title }: {title: string}) {
  return (
    <NextHead>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

export default Head;