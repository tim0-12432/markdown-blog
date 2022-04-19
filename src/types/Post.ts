export type Post = {
    content: string;
    meta: PostMeta;
}

export type PostMeta = {
    slug: string;
    title: string;
    date: string;
    author: string;
    tags: string[];
    image: string | null;
}

export default Post;