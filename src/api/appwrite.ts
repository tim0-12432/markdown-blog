import getConfig, { getConfigByKey } from "@/configuration/configuration";
import { AppwriteDbConfig } from "@/types/Configuration";
import { Client, Storage } from "node-appwrite";

function initAppwrite(): Client | undefined {
    const config: AppwriteDbConfig = getConfigByKey("appwriteDatabase");
    console.log("Configuration: ", getConfig());
    console.log("Appwrite: ", isAppwriteConfigured());
    if (isAppwriteConfigured()) {
        const client: Client = new Client();
        client.setEndpoint(`${config!.url!.host}:${config!.url!.port}/v1`);
        client.setProject(config!.projectId!);
        return client;
    }
}

function isAppwriteConfigured(): boolean {
    const config: AppwriteDbConfig = getConfigByKey("appwriteDatabase");
    return config !== null
            && config.url !== null
            && config.url.host !== ""
            && config.url.port !== ""
            && config.projectId !== null
            && config.projectId !== ""
            && config.postBucketId !== null
            && config.postBucketId !== "";
}

export function getAppwritePostSlugs(): string[] {
    const client: Client | undefined = initAppwrite();
    if (client && getConfigByKey("appwriteDatabase").postBucketId !== null) {
        const storage: Storage = new Storage(client);
        const fetch = async () => {
            const bucket = await storage.getBucket(getConfigByKey("appwriteDatabase").postBucketId!);

            const files = (await storage.listFiles(bucket.name)).files;
            console.log(files);
            return files.map((file) => file.$id);
        };
        fetch().then((slugs: string[]) => slugs);
    }
    return [];
}

export function getAppwritePostBySlug(file: string): string {
    const client: Client | undefined = initAppwrite();
    if (client && getConfigByKey("appwriteDatabase").postBucketId !== null) {
        const storage: Storage = new Storage(client);
        const fetch = async () => {
            const fileDoc = await storage.getFileView(getConfigByKey("appwriteDatabase").postBucketId!, file);
            return fileDoc.toString("utf-8");
        };
        fetch().then((content: string) => content);
    }
    return "";
}
