import React, { ReactNode } from "react";

function Main({ children }: { children?: ReactNode }) {
  return (
    <main className="w-full lg:w-lg 2xl:w-2xl m-auto p-5 xl:p-14">{children}</main>
  );
}

export default Main;