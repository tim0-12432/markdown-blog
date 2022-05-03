import type Configuration from "@/types/Configuration";

export const defaultConfiguration: Configuration = {
    "blogName": "Example blog",
    "blogDescription": "Example blog description",
    "blogCopyright": "Tim0-12432",

    "colors": {
        "dark": {
            "primary": "#1c1c1c",
            "secondary": "#333333",
            "font": "#ffffff",
            "accent": "#009dff"
        },
        "light": {
            "primary": "#dddddd",
            "secondary": "#fafafa",
            "font": "#000000",
            "accent": "#009dff"
        }
    },
    "appwriteDatabase": {
        "url": null,
        "projectId": null,
        "postBucketId": null,
        "apiKey": null
    }
};

export default defaultConfiguration;