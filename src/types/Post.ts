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
    slug: string;
    title: string;
    date: string;
    author: string;
    tags: string[];
    image: string | null;
    readTime: ReadTime;
}

export default Post;