import { type } from "os";

export type Post = {
    content: string;
    meta: PostMeta;
}

export type ReadTime = {
    duration: number;
    humanizedDuration: string;
    wordCount: number;
    imageCount: number;
}

export type PostMeta = {
    storing: StoringInformation;
    title: string;
    date: string;
    author: string;
    tags: string[];
    image: string | null;
    readTime: ReadTime;
}

export type StoringInformation = {
    slug: string;
    location: StorageLocation;
}

export type StorageLocation = "local" | "appwrite";

export default Post;