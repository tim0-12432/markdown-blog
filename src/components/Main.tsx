import styles from "@/styles/Main";
import React, { ReactNode } from "react";

function Main({ children }: { children?: ReactNode }) {
  return (
    <main className={styles.container}>{children}</main>
  );
}

export default Main;