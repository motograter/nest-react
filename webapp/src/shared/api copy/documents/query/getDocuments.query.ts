import qs from 'qs';
import { providesList } from 'shared/helpers';

export const query = ({ page = 1, take = 5, status = 'ACTIVE' }: any) => {
  // status,
  // search,
  // asc,
  // desc,
  const queryString = qs.stringify(
    {
      take: take,
      page: page,
      status: status,
      selection: [],
    },
    { arrayFormat: 'repeat' },
  );
  return {
    method: 'GET',
    url: `documents?${queryString}`,
  };
};

export const providesTags = (users: any) => providesList(users?.result, 'Document');
