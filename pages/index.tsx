import type { NextPage } from 'next';
import configuration from '../config/configuration';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{configuration.blogName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
