import Head from 'next/head';

function Header({title}: {title: string}) {
  return (
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Header;