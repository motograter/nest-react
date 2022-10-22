type Profile = {
  email: string;
  name: string;
  lastName: string;
};

export const query = (data: Profile) => {
  return {
    method: 'POST',
    url: 'auth/profile',
    data,
  };
};
