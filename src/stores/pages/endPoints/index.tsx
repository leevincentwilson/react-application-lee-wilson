import axios, { AxiosError } from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../../global/auth/authProvider';
import { getBearerTokenFromSessionStorage } from '../../../global/auth/helpers';

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

export const getPages = (): Promise<loginReturnType> => {
  return new Promise<loginReturnType>((resolve) => {
    axios
      .get('/wp-json/wp/v2/pages', {
        headers: {
          Authorization: `Bearer ${getBearerTokenFromSessionStorage()}`,
        },
      })
      .then((response: responseType) => {
        debugger;
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
