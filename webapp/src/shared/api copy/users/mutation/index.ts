import * as createUserMutation from './createUser.mutation';
import * as updateUserMutation from './updateUser.mutation';
import * as removeUserMutation from './removeUser.mutation';
import * as getNotificationByTokenMutayion from './getNotinficationByToken.mutation';
import * as deleteNotificationByToken from './deleteNotificationByToken.mutation';
export const createMutations = (mutation: any) => {
  return {
    createUser: mutation({ ...createUserMutation }),
    updateUser: mutation({ ...updateUserMutation }),
    removeUser: mutation({ ...removeUserMutation }),
    getNotificationByToken: mutation({ ...getNotificationByTokenMutayion }),
    deleteNotificationByToken: mutation({ ...deleteNotificationByToken }),
  };
};
