export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
  username: string;
  password: string;
  name: string;
};

export type AuthUser = {
  id: string;
  email: string;
  username: string;
  roles: string[];
};

export type LoginResponse = {
  accessToken: string;
  user: AuthUser;
};

export type RegisterResponse = {
  id: string;
  email: string;
  username: string;
  roles: string[];
};
