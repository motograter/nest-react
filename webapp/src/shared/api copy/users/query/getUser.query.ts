export const query = (id: string) => {
  return {
    method: 'GET',
    url: `users/${id}`,
  };
};

export const providesTags = (result: any, error: any, id: string) => [{ type: 'User', id }];
