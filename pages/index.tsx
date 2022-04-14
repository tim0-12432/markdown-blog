import type { NextPage } from 'next';
import configuration from '../config/configuration';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Header title={configuration.blogName} />

      <main>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
