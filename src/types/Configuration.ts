export type Configuration = {
    "blogName": string,
    "blogDescription": string,
    "blogCopyright": string,
    "colors": {
        "dark": Color,
        "light": Color
    } | Color,
    "appwriteDatabase": AppwriteDbConfig
}

export type AppwriteDbConfig = {
    "url": Url | null,
    "projectId": string | null,
    "postBucketId": string | null,
    "apiKey": string | null
}

export type Color = {
    "primary": string,
    "secondary": string,
    "font": string,
    "accent": string
}

export type Url = {
    "host": string,
    "port": string | number
}

export default Configuration;