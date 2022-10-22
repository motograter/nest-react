export const query = (data: any) => {
  return {
    method: 'POST',
    url: 'documents',
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' },
  };
};
