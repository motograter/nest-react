import qs from 'qs';
import { providesList } from 'shared/helpers';

export const query = ({ page = 1, take = 5 }: any) => {
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
    url: `notifications?${queryString}`,
  };
};

export const providesTags = (users: any) => providesList(users?.result, 'Notification');
