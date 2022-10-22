import { Main } from 'pages/Main';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { usersRouteMap } from './usersRouteMap';
import { documentsRouteMap } from './documentsRouteMap';
import { profileRouteMap } from './profileRouteMap';

import SignIn from 'pages/SignIn/SignIn';
import { useSelector } from 'shared/redux-stm';
import Dashboard from 'pages/Dashboard';

const ProtectedRoute = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return isLogged ? <Outlet /> : <Navigate to='sign-in' />;
};

const routingMap = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <Navigate to='main' /> },
      {
        path: 'main',
        element: (
          <Main>
            <Outlet />
          </Main>
        ),
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          documentsRouteMap,
          usersRouteMap,
          profileRouteMap,
        ],
      },
    ],
  },
  {
    path: 'sign-in',
    element: <SignIn />,
  },
  {
    path: '*',
    element: <Navigate to='sign-in' />,
  },
];

export const Routing = () => {
  return useRoutes(routingMap);
};
