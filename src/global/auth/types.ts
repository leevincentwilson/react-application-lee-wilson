export type userCredentialsType = {
  username: string;
  password: string;
};

export type authCredentialsType = {
  token: string | undefined;
  displayName: string | undefined;
  email: string | undefined;
  expires: Date | undefined;
};
