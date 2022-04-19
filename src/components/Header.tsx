import configuration from "@/config/configuration";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-full dark:bg-black py-5 px-3 m-0 flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold dark:text-white my-3">
            <Link href={"/"}><a className="">{ configuration.blogName }</a></Link>
        </h1>
        <h2 className="text-2xl font-normal dark:text-white">{ configuration.blogDescription }</h2>
    </header>
  );
}

export default Header;