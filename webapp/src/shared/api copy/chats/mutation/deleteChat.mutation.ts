export const query = (id: string) => {
  return {
    method: 'DELETE',
    url: `chats/${id}`,
  };
};

export const invalidatesTags = ['Chat'];
