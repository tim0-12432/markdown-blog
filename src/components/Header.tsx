import configuration from "@/config/configuration";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
        <h1>
            <Link href={"/"}>{ configuration.blogName }</Link>
        </h1>
        <h2>{ configuration.blogDescription }</h2>
    </header>
  );
}

export default Header;