import * as getChatsQuery from './getChats.query';
import * as getChatMessagesQuery from './getChatMessages.query';

export const createQueries = (query: any) => {
  return {
    getChats: query({ ...getChatsQuery }),
    getChatMessages: query({ ...getChatMessagesQuery }),
  };
};
