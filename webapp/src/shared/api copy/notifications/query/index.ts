import * as getNotificationQuery from './getNotification.query';
import * as getNotificationsQuery from './getNotifications.query';

export const createQueries = (query: any) => {
  return {
    getNotifications: query({ ...getNotificationsQuery }),
    getNotification: query({ ...getNotificationQuery }),
  };
};
