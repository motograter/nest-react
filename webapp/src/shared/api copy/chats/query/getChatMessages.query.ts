import qs from 'qs';
import { providesList } from 'shared/helpers';

export const query = ({ page = 1, take = 5, id }: any) => {
  // status,
  // search,
  // asc,
  // desc,
  const queryString = qs.stringify(
    {
      take: take,
      page: page,
      selection: [],
    },
    { arrayFormat: 'repeat' },
  );
  return {
    method: 'GET',
    url: `chats/${id}messages?${queryString}`,
  };
};
