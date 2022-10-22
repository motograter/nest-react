type UpdateNotification = {
  title?: string;
  type?: 'SIGNER_INVITATION_TO_SIGN';
  status?: 'UNREAD';
};

export const query = ({ id, data }: { id: string; data: UpdateNotification }) => {
  return {
    method: 'PATCH',
    url: `notifications/${id}`,
    data,
  };
};

export const invalidatesTags = ['Notification'];
