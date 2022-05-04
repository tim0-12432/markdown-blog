# Build image

`docker build . --file Dockerfile --tag dev/markdown-blog:latest`

# Create container and run

`docker run --name markdown-blog -d -p 8082:3000 -v markdown-blog_config:/config -v markdown-blog_posts:/posts -v markdown-blog_images:/public/images -e ENV_APPWRITEDATABASE_PROJECTID=<PROJECT_ID> -e ENV_APPWRITEDATABASE_POSTBUCKETID=<POST_BUCKET_ID> -e ENV_APPWRITEDATABASE_APIKEY=<API_KEY> dev/markdown-blog:latest`