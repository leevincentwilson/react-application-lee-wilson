import axios, { AxiosError } from 'axios';
import { userCredentialsType } from '../types';

export type loginReturnType = {
  data?: authReturnType;
  error?: AxiosError;
};

export type authReturnType = {
  token: string;
  displayName: string;
  email: string;
};
type responseType = {
  data: {
    token: string;
    user_display_name: string;
    user_email: string;
    user_nicename: string;
  };
};

export const login = (
  userCredentials: userCredentialsType,
): Promise<loginReturnType> => {
  return new Promise<loginReturnType>((resolve) => {
    axios
      .post('/wp-json/jwt-auth/v1/token', userCredentials)
      .then((response: responseType) => {
        resolve({
          data: {
            token: response.data.token,
            displayName: response.data.user_display_name,
            email: response.data.user_email,
          },
          error: undefined,
        });
      })
      .catch((error) => {
        resolve({
          data: undefined,
          error,
        });
      });
  });
};
