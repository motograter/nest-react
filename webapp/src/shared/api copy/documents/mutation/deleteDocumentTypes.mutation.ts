export const query = (id: string) => {
  return {
    method: 'DELETE',
    url: `documets/types/${id}`,
  };
};

export const invalidatesTags = ['Document'];
