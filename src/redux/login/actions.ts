import {createAction} from '@reduxjs/toolkit';
import {
  LoginRequestPayload,
  LoginSuccessPayload,
  LoginFailedPayload,
} from './types';

export const loginRequest = createAction<LoginRequestPayload>('LOGIN_REQUEST');
export const loginSuccess = createAction<LoginSuccessPayload>('LOGIN_SUCCESS');
export const loginFailed = createAction<LoginFailedPayload>('LOGIN_FAILED');
