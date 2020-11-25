import React, { createContext, useContext, useState, useEffect } from 'react';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { Login } from './components/login';
import { ErrorHandlingContext } from '../errorHandling/errorHandlingProvider';
import { authCredentialsType, userCredentialsType } from './types';
import { severityType } from '../errorHandling/types';
import { login } from './endPoints';

export type AuthProviderType = {
  authCredentials: authCredentialsType;
  logout: () => void;
};

export const AuthContext = createContext<AuthProviderType | undefined>(
  undefined
);

type ProviderType = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: ProviderType) => {
  const errorHandling = useContext(ErrorHandlingContext);
  const [authCredentials, setAuthCredentials] = useState<
    authCredentialsType | undefined
  >(undefined);

  useEffect(() => {
    const rawAuthData = sessionStorage.getItem('auth');
    if (rawAuthData) {
      const authData: authCredentialsType = JSON.parse(rawAuthData);
      setAuthCredentials(authData);
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem('auth');
    setAuthCredentials(undefined);
  };

  const handleLogin = async ({ username, password }: userCredentialsType) => {
    if (username.length === 0) {
      errorHandling?.addError({
        severity: severityType.ERROR,
        title: 'Please enter a user name',
      });
    } else if (password.length === 0) {
      errorHandling?.addError({
        severity: severityType.ERROR,
        title: 'Please enter a password',
      });
    } else {
      errorHandling?.clearErrors();
      const { data, error } = await login({ username, password });
      if (error) {
        errorHandling?.addError({
          severity: severityType.ERROR,
          title: error.message,
        });
      } else if (data) {
        const decodedJwt: JwtPayload = jwt_decode(data.token);
        setAuthCredentials({
          ...data,
          expires: decodedJwt?.exp
            ? new Date(decodedJwt.exp * 1000)
            : undefined,
        });
        sessionStorage.setItem(
          'auth',
          JSON.stringify({
            ...data,
            expires: decodedJwt?.exp
              ? new Date(decodedJwt.exp * 1000)
              : undefined,
          })
        );
      }
    }
  };

  if (!authCredentials?.expires || authCredentials?.expires <= new Date()) {
    return <Login login={handleLogin} />;
  }

  return (
    <AuthContext.Provider value={{ authCredentials, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
