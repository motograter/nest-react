export const query = (data: { token: string }) => {
  return {
    method: 'DELETE',
    url: 'users/notification-tokens',
    data,
  };
};
