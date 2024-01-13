import { lazy } from 'react';

import { type IRoute } from '@/@types/routes';
import { PRIVATE_URL } from '@/constants/urls';

const Home = lazy(() => import('@/features/Home/pages/Home'));

const authenRoutes: IRoute[] = [
  {
    title: 'home',
    path: PRIVATE_URL.home,
    page: <Home />
  }
];

export default authenRoutes;
