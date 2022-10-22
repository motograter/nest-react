import qs from 'qs';
import { providesList } from 'shared/helpers';
type UsersParams = {
  page: number;
  take: number;
  searchQuery?: string;
};

export const query = ({ page = 1, take = 5, searchQuery }: UsersParams) => {
  const queryString = qs.stringify(
    {
      take: take,
      page: page,
      selection: ['id', 'role', 'email', 'name', 'lastName', 'status', 'createdAt', 'updatedAt'],
    },
    { arrayFormat: 'repeat' },
  );
  return {
    method: 'GET',
    url: `users?${queryString}`,
    params: {
      search: searchQuery || null,
    },
  };
};

export const providesTags = (users: any) => providesList(users?.result, 'User');
