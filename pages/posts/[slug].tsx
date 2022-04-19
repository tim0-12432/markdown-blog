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
import configuration from "@/config/configuration";
import MdxEmbeds from "@/components/embeds/MdxEmbeds";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark-dimmed.css";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";

type PostProps = {
    content: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: PostMeta;
}

function Post(props: {post: PostProps}) {
    const { content, meta } = props.post;
    return (
        <>
            <NextSeo
                title={meta.title}
            />
            <Head title={`${meta.title} - ${configuration.blogName}`} />
            <Header />
            <Main>
                {
                    meta.image && (
                        <Image priority src={meta.image} width={200} height={200} alt={`Thumbnail ${meta.title}`} />
                    )
                }
                <h1>{ meta.title }</h1>
                <MDXRemote {...content} components={MdxEmbeds} lazy />
            </Main>
            <Footer />
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

    return {
        props: {
            post: {
                content: serializedMdx,
                meta
            }
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: {params: {slug: string}}[] = getAllSlugs()
            .map((slug: string) => ({ params: { slug } }));

    return { paths, fallback: false };
};

export default Post;