export type Configuration = {
    blogName: string,
    blogDescription: string,
    blogCopyright: string,
    colors: {
        dark: Color,
        light: Color
    } | Color,
    appwriteDatabase: {
        url: Url | null,
        projectId: string | null
    } | null
}

export type Color = {
    primary: string,
    secondary: string,
    font: string,
    accent: string
}

export type Url = {
    host: string | null,
    port: string | null
}

export default Configuration;