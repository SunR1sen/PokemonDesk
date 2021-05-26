import config from "../config";

function getUrlWithParamsConfig(endPointConfig: keyof typeof config.client.endpoint) {
    const url = {
        ...config.client.server,
        ...config.client.endpoint[endPointConfig].uri,
    }

    return url;
}

export default getUrlWithParamsConfig;