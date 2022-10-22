type ChangeSatatus = {
  verificationStatus: string;
};

export const query = (id: string, data: ChangeSatatus) => {
  return {
    method: 'PATCH',
    url: `documents/${id}/file`,
    data,
  };
};
