import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Main from "@/components/Main";
import React from "react";
import getConfig from "@/configuration/configuration";
import Configuration from "@/types/Configuration";
import styles from "@/styles/Error";

function Custom500(props: { config: Configuration }) {
  const { config } = props;
  return (
    <>
        <Head title={`500 - ${config.blogName}`} />
        <Main>
            <h1 className={styles.headline}>500</h1>
            <h2 className={styles.caption}>Internal Server Error!</h2>
        </Main>
        <Footer config={config} />
    </>
  );
}

export async function getStaticProps() {
  return { props: { config: getConfig() } };
}

export default Custom500;