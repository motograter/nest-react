type UpdatePassword = {
  password: string;
  oldPassword: string;
};

export const query = (data: UpdatePassword) => {
  return {
    method: 'POST',
    url: 'auth/profile/password',
    data,
  };
};
