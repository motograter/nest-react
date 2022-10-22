export const query = ({ refreshToken }: { refreshToken: string }) => {
  return {
    method: 'POST',
    url: 'auth/log-out',
    data: { refreshToken },
  };
};
