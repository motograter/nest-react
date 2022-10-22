export * from './baseApi';

import * as auth from './auth';
import * as chats from './chats';
import * as documents from './documents';
import * as notifications from './notifications';
import * as users from './users';
import * as init from './init';

export default {
  auth,
  chats,
  documents,
  notifications,
  users,
  init,
};
