export const query = ({ id, data }: { id: string; data: any }) => {
  return {
    method: 'POST',
    url: `documents/${id}/signature`,
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' },
  };
};
