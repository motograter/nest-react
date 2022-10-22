type Document = {
  id: string;
};

type Participant = {
  id: string;
};

type ChatPersonalCreate = {
  document: Document;
  participants: Participant[];
};

export const query = (data: ChatPersonalCreate) => {
  return {
    method: 'POST',
    url: 'chats/personal',
    data,
  };
};

export const invalidatesTags = ['Chat'];
