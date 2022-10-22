type SignIn = {
  password: string;
  email: string;
};

export const query = (data: SignIn) => {
  return {
    method: 'POST',
    url: 'auth/signin',
    data,
  };
};
