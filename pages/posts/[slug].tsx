import { getAllSlugs, getPostBySlug } from "@/api/posts";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Main from "@/components/Main";
import type { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostMeta } from "@/types/Post";
import MdxEmbeds from "@/components/embeds/MdxEmbeds";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark-dimmed.css";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import styles from "@/styles/Post";
import getConfig, { getConfigByKey } from "@/configuration/configuration";
import Configuration from "@/types/Configuration";

type PostProps = {
    content: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: PostMeta;
}

function Post(props: {post: PostProps, config: Configuration}) {
    const { content, meta } = props.post;
    const Overrides: {[name: string]: (params: any) => JSX.Element} = {
        h1: (params: any) => <h1 {...params} className={styles.h1} />,
        h2: (params: any) => <h2 {...params} className={styles.h2} />,
        h3: (params: any) => <h3 {...params} className={styles.h3} />,
        h4: (params: any) => <h4 {...params} className={styles.h4} />,
        p: (params: any) => <p {...params} className={styles.p} />,
        a: (params: any) => <a {...params} className={styles.a} />
    };
    return (
        <>
            <NextSeo
                title={meta.title}
            />
            <Head title={`${meta.title} - ${props.config.blogName}`} />
            <Header config={props.config} />
            <Main>
                {
                    meta.image && (
                        <Image priority src={meta.image} width={200} height={200} alt={`Thumbnail ${meta.title}`} />
                    )
                }
                <h1 className={styles.title}>{ meta.title }</h1>
                <h2 className={styles.date}>{ meta.date }</h2>
                <h2 className={styles.readTime}>{ meta.readTime.humanizedDuration }</h2>
                <MDXRemote {...content} components={{ ...MdxEmbeds, ...Overrides }} lazy />
            </Main>
            <Footer config={props.config} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    const { meta, content } = getPostBySlug(slug);

    const serializedMdx = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                rehypeHighlight,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                [rehypeKatex, { displayMode: true }],
                [rehypeExternalLinks, { target: "_blank", rel: ["nofollow"] }]
            ]
        }
    });

    const config = getConfig();

    return {
        props: {
            post: {
                content: serializedMdx,
                meta
            },
            config
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: {params: {slug: string}}[] = getAllSlugs()
            .map((slug: string) => ({ params: { slug } }));

    return { paths, fallback: false };
};

export default Post;