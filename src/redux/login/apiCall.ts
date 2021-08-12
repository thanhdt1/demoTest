import env from '../../env';
import withQuery from 'with-query';
import {LoginRequestPayload} from './types';
import axios from 'axios';
export async function loginUser({
  user_id,
  user_pw,
}: LoginRequestPayload): Promise<any> {
  try {
    const url = withQuery(`${env.API_URL}/auth/login`);
    const data = {
      user_id: user_id,
      user_pw: user_pw,
    };

    const response = await axios(url, {
      method: 'POST',
      data: data,
    });
    return response.data;
  } catch (error) {
    const {response} = error;
    const {request, ...errorObject} = response; // take everything but 'request'
    return errorObject.data;
  }
}
