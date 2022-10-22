import * as createChatGroupMutation from './createChatGroup.mutation';
import * as createChatPersonalMutation from './createChatPersonal.mutation';
import * as deleteChatMutation from './deleteChat.mutation';

export const createMutations = (mutation: any) => {
  return {
    createChatGroup: mutation({ ...createChatGroupMutation }),
    getChatPersonal: mutation({ ...createChatPersonalMutation }),
    deleteChat: mutation({ ...deleteChatMutation }),
  };
};
