export type user = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
};

export type userProfile = {
  name: string;
  email: string;
  password: string;
};
