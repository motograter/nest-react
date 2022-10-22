export const query = (id: string) => {
  return {
    method: 'POST',
    url: `documents/${id}/view`,
  };
};
