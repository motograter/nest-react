type NotificationCreate = {
  title: string;
  type: 'SIGNER_INVITATION_TO_SIGN';
};

export const query = (data: NotificationCreate) => {
  return {
    method: 'POST',
    url: 'notifications',
    data,
  };
};

export const invalidatesTags = ['Notification'];
