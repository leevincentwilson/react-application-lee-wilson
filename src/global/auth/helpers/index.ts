import { authCredentialsType } from '../types';

export const getBearerTokenFromSessionStorage = () => {
  const rawAuthData = sessionStorage.getItem('auth');
  if (rawAuthData) {
    const authData: authCredentialsType = JSON.parse(rawAuthData);
    return authData.token;
  }
  return null;
};
