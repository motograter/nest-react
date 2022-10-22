type SignUp = {
  password: string;
  email: string;
};

export const query = (data: SignUp) => {
  return {
    method: 'POST',
    url: 'auth/signup',
    data,
  };
};
