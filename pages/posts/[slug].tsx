import { getAllSlugs, getLocationFor, getPostBySlug } from "@/api/posts";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Main from "@/components/Main";
import type { GetServerSideProps } from "next";
import React from "react";
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
import getConfig from "@/configuration/configuration";
import Configuration from "@/types/Configuration";
import Link from "next/link";

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
        a: (params: any) => <a {...params} className={styles.a} />,
        li: (params: any) => <li {...params} className={styles.li} />,
        ul: (params: any) => <ul {...params} className={styles.ul} />,
        ol: (params: any) => <ol {...params} className={styles.ol} />,
        blockquote: (params: any) => <blockquote {...params} className={styles.blockquote} />,
        code: (params: any) => <code {...params} className={styles.code} />,
        pre: (params: any) => <pre {...params} className={styles.pre} />,
        strong: (params: any) => <strong {...params} className={styles.strong} />
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
                        <div className={styles.cover} style={{ backgroundImage: `url(${meta.image})` }} />
                    )
                }
                <h1 className={styles.title}>{ meta.title }</h1>
                <details className={styles.details}>
                    <summary>More information</summary>
                    <ul>
                        <li className={styles.date}>Published at { meta.date }</li>
                        <li className={styles.author}>Written by { meta.author }</li>
                        <li className={styles.readTime}>Reading time: { meta.readTime.humanizedDuration }</li>
                        <li className={styles.tags}>
                            {
                                meta.tags.map((tag: string) => (
                                    <span key={`${meta.storing.slug}-${tag}`}><Link href={`/tags/${tag}`}><a className={styles.tag}>{tag}</a></Link></span>
                                ))
                            }
                        </li>
                    </ul>
                </details>
                <MDXRemote {...content} components={{ ...MdxEmbeds, ...Overrides }} lazy />
            </Main>
            <Footer config={props.config} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    const config: Configuration = getConfig();
    const paths: string[] = await getAllSlugs();

    if (!paths.includes(slug)) {
        return {
            notFound: true
        };
    }

    const { meta, content } = await getPostBySlug({ slug, location: await getLocationFor(slug) });

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
            },
            config
        }
    };
};

export default Post;