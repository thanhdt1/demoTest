import {PayloadAction} from '@reduxjs/toolkit';
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  select,
  takeLatest,
} from 'redux-saga/effects';
import {loginFailed, loginRequest, loginSuccess} from './actions';
import * as loginAPI from './apiCall';
import {
  LoginRequestPayload,
  LoginSuccessPayload,
  LoginFailedPayload,
} from './types';
import AsyncStorage from '@react-native-community/async-storage';
import {handleLogin} from '../../scenes/Loginpage/index';
interface ActionFailed {
  type: string;
  payload: LoginFailedPayload;
}
interface ActionSuccess {
  type: string;
  payload: LoginSuccessPayload;
}
type Action = ActionFailed | ActionSuccess;

function* loginSaga({
  payload,
}: PayloadAction<LoginRequestPayload>): Generator<
  CallEffect | PutEffect<Action>,
  void
> {
  const {user_id, user_pw} = payload;
  const usersRes: any = yield call(loginAPI.loginUser, {user_id, user_pw});
  try {
    if (usersRes.code === 200) {
      yield put(loginSuccess(usersRes));
      AsyncStorage.setItem('api_token', usersRes.api_token);
      AsyncStorage.setItem(
        'password_default',
        JSON.stringify(usersRes.password_default),
      );
      handleLogin(usersRes);
    } else {
      yield put(loginFailed(usersRes));
      handleLogin(usersRes);
    }
  } catch (err) {
    yield put(loginFailed(err.toString()));
    handleLogin(usersRes);
  }
}

function* artworkSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(loginRequest.type, loginSaga);
}

export default artworkSaga;
