const config = require("./config/configuration");

module.exports = {
    siteTitle: config.blogName,
    siteDescription: config.blogDescription,
    siteLanguage: "en",
    siteCopyright: config.blogCopyright,
    siteUrl: process.env.SITE_URL,
    outDir: "public/rss",
    postsDir: "blog/posts"
}