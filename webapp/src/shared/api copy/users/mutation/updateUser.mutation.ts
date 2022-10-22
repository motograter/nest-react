type UpdateUser = {
  email?: string;
  name?: string;
  lastName?: string;
  password?: string;
  role?: string;
};

export const query = ({ id, data }: { id: string; data: UpdateUser }) => {
  return {
    method: 'PATCH',
    url: `users${id}`,
    data,
  };
};

export const invalidatesTags = (result: any, error: any, user: { id: string }) => {
  return [{ type: 'User', id: user.id }];
};
