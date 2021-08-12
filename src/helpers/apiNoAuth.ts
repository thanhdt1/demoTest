import env from '../env';
import withQuery from 'with-query';
import axios from 'axios';
export async function login(endpoint, data): Promise<any> {
  try {
    const url = withQuery(
      `${env.API_URL}/` + endpoint,
      // '?email=' + data.email + '&password=' + data.password,
    );
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'ea278b7741967a5e',
        'user-agent': 'Android;1.15.0',
        'TOK-DEVICE-ID': 'ea278b7741967a5e',
      },
    };
    const response = await axios.post(url, data, config);
    const response_data = response && response.data ? response.data : {};
    return {
      response_data: response_data,
      code: Number(response.status),
      message: response.statusText,
    };
  } catch (error) {
    const {response} = error;
    console.log('CallLogin -> error', error);
    const {request, ...errorObject} = response; // take everything but 'request'
    return errorObject.data;
  }
}
export async function api(data, endpoint): Promise<any> {
  try {
    const url = withQuery(`${env.API_URL}/` + endpoint);
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    const {response} = error;
    const {request, ...errorObject} = response; // take everything but 'request'
    return errorObject.data;
  }
}
export async function get(endpoint): Promise<any> {
  try {
    const url = withQuery(`${env.API_URL}/` + endpoint);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'ea278b7741967a5e',
        'user-agent': 'Android;1.15.0',
        'TOK-DEVICE-ID': 'ea278b7741967a5e',
      },
    };
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    const {response} = error;
    const {request, ...errorObject} = response; // take everything but 'request'
    return errorObject.data;
  }
}
