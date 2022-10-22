export const query = (id: string) => {
  return {
    method: 'DELETE',
    url: `documets/${id}`,
  };
};

export const invalidatesTags = ['Document'];
