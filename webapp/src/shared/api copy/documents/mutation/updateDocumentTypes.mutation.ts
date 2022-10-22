type UpdateDocumentType = {
  name: string;
};

export const query = ({ id, data }: { id: string; data: UpdateDocumentType }) => {
  return {
    method: 'PATCH',
    url: `documents/types/${id}`,
    data,
  };
};
