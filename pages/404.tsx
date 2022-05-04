import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import getConfig from "@/configuration/configuration";
import styles from "@/styles/Error";
import Configuration from "@/types/Configuration";
import React from "react";

function Custom404(props: { config: Configuration }) {
  const { config } = props;
  return (
    <>
        <Head title={`404 - ${config.blogName}`} />
        <Header config={config} />
        <Main>
            <h1 className={styles.headline}>404</h1>
            <h2 className={styles.caption}>Not found!</h2>
        </Main>
        <Footer config={config} />
    </>
  );
}

export async function getStaticProps() {
  return { props: { config: getConfig() } };
}

export default Custom404;