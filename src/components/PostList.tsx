import { PostMeta } from "@/types/Post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PostListProps = {
    posts: PostMeta[];
}

function PostList(props: PostListProps) {
  return (
      <ul>
        {
            props.posts.map((post: PostMeta) => (
                <li key={post.slug}>
                    {
                        post.image && (
                            <Image src={post.image} width={200} height={200} alt={`Thumbnail ${post.title}`} />
                        )
                    }
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    <p>{post.date}</p>
                    <p>
                        {
                            post.tags.map((tag: string) => (
                                <span key={`${post.slug}-${tag}`}><Link href={`/tags/${tag}`}>{tag}</Link></span>
                            ))
                        }
                    </p>
                </li>
            ))
        }
      </ul>
  );
}

export default PostList;