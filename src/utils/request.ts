import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { Endpoints } from '../config';

async function req(endPointConfig: Endpoints) {
  const uri = Url.format(getUrlWithParamsConfig(endPointConfig));

  return await fetch(uri).then((res) => res.json());
}

export default req;
