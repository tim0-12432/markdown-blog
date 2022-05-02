import env from "@beam-australia/react-env";
import defaultConfiguration from "./defaultConfiguration";
import Configuration from "@/types/Configuration";
import json from "@/config/configuration.json";

function getConfigObject(): Configuration {
    const configObject: Configuration = {
        ...defaultConfiguration,
        ...json
    };
    for (const key of Object.keys(configObject)) {
        const keyName = `${key.toUpperCase()}`;
        if (env(keyName) !== undefined) {
            (configObject as {[key: string]: any})[key] = env(keyName);
        }
        if (Object.keys((configObject as {[key: string]: any})[key]).length !== 0) {
            for (const subKey of Object.keys((configObject as {[key: string]: any})[key])) {
                const subKeyName = `${key.toUpperCase()}_${subKey.toUpperCase()}`;
                if (env(subKeyName) !== undefined) {
                    (configObject as {[key: string]: any})[key][subKey] = env(subKeyName);
                }
                if (Object.keys((configObject as {[key: string]: any})[key][subKey]).length !== 0) {
                    for (const subSubKey of Object.keys((configObject as {[key: string]: any})[key][subKey])) {
                        const subSubKeyName = `${key.toUpperCase()}_${subKey.toUpperCase()}_${subSubKey.toUpperCase()}`;
                        if (env(subSubKeyName) !== undefined) {
                            (configObject as {[key: string]: any})[key][subKey][subSubKey] = env(subSubKeyName);
                        }
                    }
                }
            }
        }
    }
    return configObject;
}

export function getConfig(): Configuration {
    return getConfigObject();
}

export function getDefaultConfig(): Configuration {
    return defaultConfiguration;
}

export function getConfigByKey(key: string) {
    const config = getConfig();
    if (key in config) {
        return (config as {[key: string]: any})[key];
    }
    return null;
}

export default getConfig;