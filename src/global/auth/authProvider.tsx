import React, { createContext, useState } from 'react';
import { Login } from './components/login';

export type AuthProviderType = {
  authBearerToken: string;
};

export const AuthContext = createContext<AuthProviderType | undefined>(
  undefined
);

type ProviderType = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: ProviderType) => {
  const [authBearerToken, setAuthBearerToken] = useState<string>('');
  const loggedIn = false;
  if (!loggedIn) {
    return <Login />;
  }
  return (
    <AuthContext.Provider value={{ authBearerToken }}>
      {children}
    </AuthContext.Provider>
  );
};
