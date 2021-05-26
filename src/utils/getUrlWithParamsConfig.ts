import config, { Endpoints } from '../config';

function getUrlWithParamsConfig(endPointConfig: Endpoints, query: object, params?: any) {
  let { pathname } = config.client.endpoint[endPointConfig as keyof typeof config.client.endpoint].uri;
  if (params?.id) {
    pathname += params.id;
  }

  const url = {
    ...config.client.server,
    pathname,
    query: { ...query },
  };

  return url;
}

export default getUrlWithParamsConfig;