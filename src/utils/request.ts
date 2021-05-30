import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { Endpoints } from '../config';

async function req<T>(endPoint: Endpoints, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endPoint, query));

  return await fetch(uri).then((res) => res.json());
}

export default req;
