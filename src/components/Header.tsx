import configuration from "@/config/configuration";
import styles from "@/styles/Header";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className={styles.container}>
        <h1 className={styles.headline}>
            <Link href={"/"}><a className="">{ configuration.blogName }</a></Link>
        </h1>
        <h2 className={styles.caption}>{ configuration.blogDescription }</h2>
    </header>
  );
}

export default Header;