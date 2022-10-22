type UpdateInvitationPass = {
  email: string;
  password: string;
  oldPassword: string;
};

export const query = (data: UpdateInvitationPass) => {
  return {
    method: 'POST',
    url: 'auth/invitation/password',
    data,
  };
};
