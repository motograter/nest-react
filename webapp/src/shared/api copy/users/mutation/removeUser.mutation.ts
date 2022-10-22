export const query = (id: string) => {
  return {
    method: 'DELETE',
    url: `users${id}`,
  };
};
