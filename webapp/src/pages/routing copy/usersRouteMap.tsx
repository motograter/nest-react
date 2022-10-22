import Users from 'pages/Users/UserList';
import UserView from 'pages/Users/UserView';
import { Outlet } from 'react-router-dom';

export const usersRouteMap = {
  path: Users.path,
  element: <Outlet />,
  children: [
    { index: true, element: Users.view() },
    { path: UserView.path, element: UserView.view() },
  ],
};
