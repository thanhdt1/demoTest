import {createReducer, createSlice} from '@reduxjs/toolkit';
import {loginFailed, loginSuccess, loginRequest} from './actions';

export interface IFilmsState {
  loading: boolean;
  isError: boolean;
  users: {
    message: string;
    api_token: string;
    user: {
      user_id: string;
      user_nm: string;
      api_token: string;
      loc_cd: number;
      use_yn: string;
      role_id: number;
      in_id: string;
      in_dt: string;
      up_id: string;
      up_dt: string;
      created_at: string;
      updated_at: string;
      deleted_at: string;
    };
  }[];
}

const initialState: IFilmsState = {
  loading: false,
  users: [],
  isError: false,
};

export const loginsReducer = createReducer(initialState, {
  [loginSuccess.type]: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  [loginFailed.type]: (state, action) => {
    state.users = action.payload;
    state.loading = false;
    state.isError = true;
  },
  [loginRequest.type]: state => {
    state.loading = true;
    state.users = [];
  },
});
