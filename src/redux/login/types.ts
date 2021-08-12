export type LoginRequestPayload = {
  user_id?: string;
  user_pw?: string;
};

export type LoginSuccessPayload = {
  data: {
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
};
export type LoginFailedPayload = {
  error: {
    code: number;
    message: string;
  }[];
};
