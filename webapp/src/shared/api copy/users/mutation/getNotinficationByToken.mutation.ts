export const query = (data: { token: string }) => {
  return {
    method: 'POST',
    url: 'users/notification-tokens',
    data,
  };
};
