import Profile from 'pages/Profile';
import { Outlet } from 'react-router-dom';

export const profileRouteMap = {
  path: Profile.path,
  element: <Outlet />,
  children: [{ index: true, element: Profile.view() }],
};
