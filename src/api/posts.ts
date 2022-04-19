import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import Post from "@/types/Post";
import configuration from "@/config/configuration";

const POSTS_DIR: string = path.join(process.cwd(), "blog", "posts");
const GLOB_PATTERN: string = "blog/posts/*.mdx";

export function getAllPosts() {
    const posts: Post[] = getAllSlugs().map((slug: string) => getPostBySlug(slug));
    return posts.sort((a: Post, b: Post) => {
        if (a.meta.date < b.meta.date) return 1;
        else if (a.meta.date > b.meta.date) return -1;
        else return 0;
    });
}

export function getAllSlugs(): string[] {
    const slugs: string[] = sync(GLOB_PATTERN, { nodir: true, nocase: true, strict: false });
    return slugs.map((filePath: string) => path.basename(filePath, path.extname(filePath)));
}

export function getPostBySlug(slug: string): Post {
    const postPath: string = path.join(POSTS_DIR, `${slug}.mdx`);
    const source: string = fs.readFileSync(postPath, "utf8");
    const { data, content } = matter(source);
    return {
        content,
        meta: {
            slug,
            title: data.title ?? slug,
            date: (data.date ?? new Date()).toLocaleDateString(undefined),
            author: data.author ?? configuration.blogCopyright,
            tags: data.tags.sort() ?? [],
            image: data.image ?? null
        }
    };
}

export default getAllPosts;