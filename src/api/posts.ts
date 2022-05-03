import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import Post, { StorageLocation, StoringInformation } from "@/types/Post";
import readTimeEstimate from "read-time-estimate";
import { getAppwritePostBySlug, getAppwritePostSlugs } from "./appwrite";
import { getConfigByKey } from "@/configuration/configuration";

const POSTS_DIR: string = path.join(process.cwd(), "posts");
const GLOB_PATTERN: string = "posts/*.mdx";

export async function getAllPosts(): Promise<Post[]> {
    const posts: Post[] = await Promise.all(getAllLocalSlugs().map((slug: string) => getPostBySlug({ slug, location: "local" })));

    const appwritePosts: Post[] = await Promise.all((await getAppwritePostSlugs()).map((slug: string) => getPostBySlug({ slug, location: "appwrite" })));
    posts.push(...appwritePosts);

    return posts.sort((a: Post, b: Post) => {
        if (a.meta.date < b.meta.date) return 1;
        else if (a.meta.date > b.meta.date) return -1;
        else return 0;
    });
}

function getAllLocalSlugs(): string[] {
    const fileNames: string[] = sync(GLOB_PATTERN, { nodir: true, nocase: true, strict: false });
    return fileNames.map((filePath: string) => path.basename(filePath, path.extname(filePath)));
}

export async function getAllSlugs(): Promise<string[]> {
    const slugs = getAllLocalSlugs();
    slugs.push(...(await getAppwritePostSlugs()));
    return slugs;
}

export async function getPostBySlug(storing: StoringInformation): Promise<Post> {
    let source: string = "";
    if (storing.location === "appwrite") {
        source = await getAppwritePostBySlug(storing.slug);
    } else {
        const postPath: string = path.join(POSTS_DIR, `${storing.slug}.mdx`);
        source = fs.readFileSync(postPath, "utf8");
    }

    const { data, content } = matter(source);
    const readTime = readTimeEstimate(content);
    return {
        content,
        meta: {
            storing,
            title: data.title ?? storing.slug.replace(/-/g, " "),
            date: (data.date ?? new Date()).toLocaleDateString(undefined),
            author: data.author ?? getConfigByKey("blogCopyright"),
            tags: data.tags.sort() ?? [],
            image: `/images/${(data.image ?? "").replace(/^\//, "")}`,
            readTime: {
                duration: readTime.duration,
                humanizedDuration: readTime.humanizedDuration,
                wordCount: readTime.totalWords,
                imageCount: readTime.totalImages
            }
        }
    };
}

export async function getLocationFor(slug: string): Promise<StorageLocation> {
    const slugsStoredOnAppwrite: string[] = await getAppwritePostSlugs();
    if (slugsStoredOnAppwrite.includes(slug)) {
        return "appwrite";
    }
    return "local";
}

export default getAllPosts;