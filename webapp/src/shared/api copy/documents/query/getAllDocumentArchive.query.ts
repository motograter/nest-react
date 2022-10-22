export const query = ({ id }: { id: string }) => {
  return {
    method: 'GET',
    url: `documents/${id}/archive`,
  };
};
