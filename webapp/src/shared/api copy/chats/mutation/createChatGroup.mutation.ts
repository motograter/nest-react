type Document = {
  id: string;
};
type ChatGroupCreate = {
  document: Document;
};

export const query = (data: ChatGroupCreate) => {
  return {
    method: 'POST',
    url: 'chats/group',
    data,
  };
};

export const invalidatesTags = ['Chat'];
