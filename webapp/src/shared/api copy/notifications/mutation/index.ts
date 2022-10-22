import * as createNotificationMutation from './createNotification.mutation';
import * as updateNotificationMutation from './updateNotification.mutation';
import * as deleteNotification from './deleteNotification.mutation';

export const createMutations = (mutation: any) => {
  return {
    createNotification: mutation({ ...createNotificationMutation }),
    updateNotification: mutation({ ...updateNotificationMutation }),
    deleteNotification: mutation({ ...deleteNotification }),
  };
};
