import getConfig, { getConfigByKey } from "@/configuration/configuration";
import { AppwriteDbConfig } from "@/types/Configuration";
import { Client, Storage } from "node-appwrite";

function initAppwrite(): Client | null {
    const config: AppwriteDbConfig = getConfigByKey("appwriteDatabase");
    if (isAppwriteConfigured()) {
        const client: Client = new Client();
        client.setEndpoint(`${config!.url!.host}:${config!.url!.port}/v1`);
        client.setProject(config!.projectId!);
        client.setKey(config!.apiKey!);
        return client;
    }
    return null;
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
            && config.postBucketId !== ""
            && config.apiKey !== null
            && config.apiKey !== "";
}

export async function getAppwritePostSlugs(): Promise<string[]> {
    const client: Client | null = initAppwrite();
    const config: AppwriteDbConfig = getConfigByKey("appwriteDatabase");
    if (client && config.postBucketId !== null) {
        const storage: Storage = new Storage(client);

        const files = (await storage.listFiles(config.postBucketId!)).files;
        return files.map((file) => file.$id);
    }
    return [];
}

export async function getAppwritePostBySlug(file: string): Promise<string> {
    const client: Client | null = initAppwrite();
    const config: AppwriteDbConfig = getConfigByKey("appwriteDatabase");
    if (client && config.postBucketId !== null) {
        const storage: Storage = new Storage(client);
        const fileDoc = await storage.getFileView(config.postBucketId!, file);
        return fileDoc.toString("utf-8");
    }
    return "";
}
