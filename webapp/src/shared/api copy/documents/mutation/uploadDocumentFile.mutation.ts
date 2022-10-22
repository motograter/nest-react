export const query = ({ id, data }: { id: string; data: any }) => {
  return {
    method: 'PATCH',
    url: `documents/${id}/file`,
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' },
  };
};
