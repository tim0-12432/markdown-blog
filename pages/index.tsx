import Head from "@/components/Head";
import getAllPosts from "@/api/posts";
import Post, { PostMeta }  from "@/types/Post";
import PostList from "@/components/PostList";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import getConfig from "@/configuration/configuration";
import Configuration from "@/types/Configuration";
import { GetServerSideProps } from "next";

type HomeProps = {
  postsMeta: PostMeta[];
  config: Configuration;
}

export const Home = (props: HomeProps): JSX.Element => {
  const { postsMeta, config } = props;
  return (
    <>
      <Head title={config.blogName} />
      <Header config={config} />
      <Main>
        <PostList posts={postsMeta} />
      </Main>
      <Footer config={config} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const postsMeta: PostMeta[] = (await getAllPosts())
      .slice(0, 9)
      .map((post: Post) => post.meta);
  const config = getConfig();
  return { props: { postsMeta, config } };
};

export default Home;
