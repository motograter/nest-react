import * as getUserQuery from './getUser.query';
import * as getUsersQuery from './getUsers.query';
import * as getUsersStatsQuery from './getUsersStats.query';

export const createQueries = (query: any) => {
  return {
    getUsers: query({ ...getUsersQuery }),
    getUser: query({ ...getUserQuery }),
    getUsersStats: query({ ...getUsersStatsQuery }),
  };
};
