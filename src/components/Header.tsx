import styles from "@/styles/Header";
import Configuration from "@/types/Configuration";
import Link from "next/link";
import React from "react";

function Header({ config }: { config: Configuration }) {
  return (
    <header className={styles.container}>
        <h1 className={styles.headline}>
            <Link href={"/"}><a className="">{ config.blogName }</a></Link>
        </h1>
        <h2 className={styles.caption}>{ config.blogDescription }</h2>
    </header>
  );
}

export default Header;