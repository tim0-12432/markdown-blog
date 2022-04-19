import configuration from "@/config/configuration";
import React from "react";

function Footer() {
  return (
    <footer>
      <p>&copy; {configuration.blogCopyright} | v{process.env.NEXT_PUBLIC_APP_VERSION}</p>
    </footer>
  );
}

export default Footer;