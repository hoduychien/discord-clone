import { lazy } from 'react';

import { type IRoute } from '@/@types/routes';
import { PUBLIC_URL } from '@/constants/urls';

const Login = lazy(() => import('@/features/Authentication/pages/Login'));

const authenRoutes: IRoute[] = [
  {
    path: PUBLIC_URL.login,
    page: <Login />,
    logoutRequired: true
  }
];

export default authenRoutes;
