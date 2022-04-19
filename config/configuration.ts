import type Configuration from "@/types/Configuration";

export const configuration: Configuration = {
    blogName: "Example blog",
    blogDescription: "Example blog description",
    blogCopyright: "Tim0-12432",

    colors: {
        dark: {
            primary: "#1c1c1c",
            secondary: "#2c2c2c",
            font: "#ffffff"
        },
        light: {
            primary: "#fafafa",
            secondary: "#fafafa",
            font: "#000000"
        }
    },
    appwriteDatabase: {
        host: null,
        port: null
    }
};

export default configuration;