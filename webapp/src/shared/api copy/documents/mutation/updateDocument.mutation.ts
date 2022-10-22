export const query = (id: string, data: Record<any, any>) => {
  return {
    method: 'PATCH',
    url: `documents/${id}`,
    data,
  };
};
