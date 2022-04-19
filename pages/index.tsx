import configuration from '@/config/configuration';
import Head from '@/components/Head';
import getAllPosts from '@/api/posts';
import Post, { PostMeta }  from '@/types/Post';
import PostList from '@/components/PostList';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type HomeProps = {
  postsMeta: PostMeta[];
}

export const Home = (props: HomeProps) => {
  const { postsMeta } = props;
  return (
    <>
      <Head title={configuration.blogName} />
      <Header />
      <Main>
        <PostList posts={postsMeta} />
      </Main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const postsMeta: PostMeta[] = getAllPosts()
      .slice(0, 9)
      .map((post: Post) => post.meta);
  return { props: { postsMeta } };
}

export default Home;
