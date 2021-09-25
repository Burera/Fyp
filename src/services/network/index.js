import {create} from 'apisauce';
import {BASE_URL} from '../../Constants';

export const RestClient = create({
  baseURL: `${BASE_URL}`,
  headers: {
    Accept: 'application/json',
    Authorization: '',
  },
  timeout: 60000,
});
