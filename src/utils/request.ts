import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { Endpoints } from '../config';

async function req(endPoint: Endpoints, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endPoint, query));

  return await fetch(uri).then((res) => res.json());
}

export default req;
