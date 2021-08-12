import env from '../env';
import withQuery from 'with-query';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
export async function post(endpoint, data): Promise<any> {
  try {
    const api_token: string | null = (await AsyncStorage.getItem('api_token'))
      ? await AsyncStorage.getItem('api_token')
      : null;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + ' ' + api_token,
      },
    };
    const url = withQuery(`${env.API_URL}/api/` + endpoint);
    const response = await axios.post(url, data, config);
    return response.data;
  } catch (error) {
    const {response} = error;
    const {request, ...errorObject} = response; // take everything but 'request'
    return errorObject.data;
  }
}
export async function get(endpoint): Promise<any> {
  try {
    const api_token: string | null = (await AsyncStorage.getItem('api_token'))
      ? await AsyncStorage.getItem('api_token')
      : null;
    const config = {
      headers: {
        Authorization: 'Bearer' + ' ' + api_token,
      },
    };
    const url = withQuery(`${env.API_URL}/api/` + endpoint);
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    const {response} = error;
    const {request, ...errorObject} = response; // take everything but 'request'
    return errorObject.data;
  }
}
