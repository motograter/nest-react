export const query = (id: string) => {
  return {
    method: 'DELETE',
    url: `notifications/${id}`,
  };
};

export const invalidatesTags = ['Notification'];
