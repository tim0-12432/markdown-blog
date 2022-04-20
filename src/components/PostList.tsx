import styles from "@/styles/PostList";
import { PostMeta } from "@/types/Post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PostListProps = {
    posts: PostMeta[];
}

function PostList(props: PostListProps) {
  return (
      <ul className={styles.list}>
        {
            props.posts.map((post: PostMeta) => (
                <li key={post.slug} className={styles.listElement}>
                    {
                        post.image && (
                            <div className={styles.thumnailContainer}>
                                <Image priority className={styles.thumbnail} src={post.image} width={200} height={200} alt={`Thumbnail ${post.title}`} />
                            </div>
                        )
                    }
                    <Link href={`/posts/${post.slug}`}><a className={styles.title}>{post.title}</a></Link>
                    <p className={styles.date}>{ post.date }</p>
                    <p className={styles.readTime}>{ post.readTime.humanizedDuration }</p>
                    <p className={styles.tags}>
                        {
                            post.tags.map((tag: string) => (
                                <span key={`${post.slug}-${tag}`}><Link href={`/tags/${tag}`}><a className={styles.tag}>{tag}</a></Link></span>
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