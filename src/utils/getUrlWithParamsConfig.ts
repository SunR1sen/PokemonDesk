import config, { Endpoints } from '../config';

function getUrlWithParamsConfig(endPointConfig: Endpoints, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endPointConfig as keyof typeof config.client.endpoint].uri,
    query: { ...query },
  };

  return url;
}

export default getUrlWithParamsConfig;