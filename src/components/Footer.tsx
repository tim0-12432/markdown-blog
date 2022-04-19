import configuration from "@/config/configuration";
import React from "react";

function Footer() {
  return (
    <footer className="w-full dark:bg-black py-5 px-3 m-0 flex justify-center items-center flex-col">
      <p className="text-sm font-thin dark:text-white my-3">&copy; {configuration.blogCopyright} | v{process.env.NEXT_PUBLIC_APP_VERSION}</p>
    </footer>
  );
}

export default Footer;