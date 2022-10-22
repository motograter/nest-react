import * as getProfileQuery from './getProfile.query';

export const createQueries = (query: any) => {
  return {
    getProfile: query({ ...getProfileQuery }),
  };
};
