import * as signInMutation from './signIn.mutation';
import * as logOutMutation from './logOut.mutation';
import * as signUpMutation from './signUp.mutation';
import * as createProfileMutation from './createProfile.mutation';
import * as updateProfilePasswordMutation from './updateProfilePassword.mutation';
import * as updateInvitationPasswordMutation from './updateInvitationPassword.mutation';

export const createMutations = (mutation: any) => {
  return {
    signUp: mutation({ ...signUpMutation }),
    signIn: mutation({ ...signInMutation }),
    logOut: mutation({ ...logOutMutation }),
    createProfile: mutation({ ...createProfileMutation }),
    updateProfilePassword: mutation({ ...updateProfilePasswordMutation }),
    updateInvitationPassword: mutation({ ...updateInvitationPasswordMutation }),
  };
};
