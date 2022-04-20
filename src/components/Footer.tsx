import configuration from "@/config/configuration";
import getColor from "@/styles/Colors";
import styles from "@/styles/Footer";
import React, { useEffect } from "react";

function Footer() {

  useEffect(() => {
    if (localStorage.theme !== "dark"
        || (!("theme" in localStorage)
        && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setLightMode();
    } else {
      setDarkMode();
    }
  }, []);

  const toggleTheme = () => {
    if (localStorage.theme !== "dark"
        || (!("theme" in localStorage)
        && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.setProperty("--color-primary", getColor("light", "primary"));
    document.documentElement.style.setProperty("--color-secondary", getColor("light", "secondary"));
    document.documentElement.style.setProperty("--color-font", getColor("light", "font"));
    document.documentElement.style.setProperty("--color-accent", getColor("light", "accent"));
    localStorage.theme = "light";
  };

  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.setProperty("--color-primary", getColor("dark", "primary"));
    document.documentElement.style.setProperty("--color-secondary", getColor("dark", "secondary"));
    document.documentElement.style.setProperty("--color-font", getColor("dark", "font"));
    document.documentElement.style.setProperty("--color-accent", getColor("dark", "accent"));
    localStorage.theme = "dark";
  };

  return (
    <footer className={styles.container}>
      <p className={styles.text}>&copy; {configuration.blogCopyright} | v{process.env.NEXT_PUBLIC_APP_VERSION}</p>
      <button className={styles.themeBtn} onClick={toggleTheme}>Toggle Theme</button>
    </footer>
  );
}

export default Footer;