import getAllPosts from "@/api/posts";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import PostList from "@/components/PostList";
import getConfig, { getConfigByKey } from "@/configuration/configuration";
import Configuration from "@/types/Configuration";
import Post, { PostMeta } from "@/types/Post";
import type { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

type TagProps = {
    slug: string;
    postsMeta: PostMeta[];
    config: Configuration;
}

function Tag(props: TagProps) {
    const { slug, postsMeta, config } = props;
    return (
        <>
            <Head title={`${slug} - ${config.blogName}`} />
            <Header config={config} />
            <Main>
                <h1 className="text-4xl font-bold text-[color:var(--color-font)] my-3 pb-2">
                    Tag: { slug }
                </h1>
                <PostList posts={postsMeta} />
            </Main>
            <Footer config={config} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    const posts: Post[] = (await getAllPosts()).filter((post: Post) => post.meta.tags.includes(slug));

    const config = getConfig();
    return {
        props: {
            slug,
            postsMeta: posts.map((post: Post) => (post.meta)),
            config
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts: Post[] = await getAllPosts();
    const tags: Set<string> = new Set(
        posts.map((post: Post) => post.meta.tags).flat()
    );
    const paths: {params: {slug: string}}[] = Array.from(tags)
            .map((tag: string) => ({ params: { slug: tag } }));

    return { paths, fallback: false };
};

export default Tag;