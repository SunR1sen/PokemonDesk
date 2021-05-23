import Url from 'url';
import getUrlWithParamsConfig from "./getUrlWithParamsConfig";
import config from "../config";

async function req(endPointConfig: keyof typeof config.client.endpoint) {
    const uri = Url.format(getUrlWithParamsConfig(endPointConfig));

    return await fetch(uri).then(res => res.json())
}

export default req;