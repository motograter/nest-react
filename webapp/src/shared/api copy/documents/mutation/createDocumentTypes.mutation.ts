export const query = (data: { name: string }) => {
  return {
    method: 'POST',
    url: 'documents/types',
    data,
  };
};
