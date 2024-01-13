import { lazy } from 'react';

import { type IRoute } from '@/@types/routes';

const Login = lazy(() => import('@/features/Authentication/pages/Login'));

const authenRoutes: IRoute[] = [
  {
    path: '/login',
    page: <Login />,
    logoutRequired: true
  }
];

export default authenRoutes;
