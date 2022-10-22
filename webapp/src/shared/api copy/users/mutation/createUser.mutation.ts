type UserCreate = {
  email: string;
  name: string;
  lastName: string;
  role: string;
};

export const query = (data: UserCreate) => {
  return {
    method: 'POST',
    url: 'users',
    data,
  };
};

export const invalidatesTags = ['User'];
