import getAllPosts from "@/api/posts";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import PostList from "@/components/PostList";
import configuration from "@/config/configuration";
import Post, { PostMeta } from "@/types/Post";
import type { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

type TagProps = {
    slug: string;
    postsMeta: PostMeta[];
}

function Tag(props: TagProps) {
    const { slug, postsMeta } = props;
    return (
        <>
            <Head title={`${slug} - ${configuration.blogName}`} />
            <Header />
            <Main>
                <h1>Tag: { slug }</h1>
                <PostList posts={postsMeta} />
            </Main>
            <Footer />
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    const posts: Post[] = getAllPosts().filter((post: Post) => post.meta.tags.includes(slug));

    return {
        props: {
            slug,
            postsMeta: posts.map((post: Post) => (post.meta))
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts: Post[] = getAllPosts();
    const tags: Set<string> = new Set(
        posts.map((post: Post) => post.meta.tags).flat()
    );
    const paths: {params: {slug: string}}[] = Array.from(tags)
            .map((tag: string) => ({ params: { slug: tag } }));

    return { paths, fallback: false };
};

export default Tag;