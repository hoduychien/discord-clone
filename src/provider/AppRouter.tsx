import { lazy, Suspense, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes
} from 'react-router-dom';

import publicRoutes from '@/routes/public/publicRoutes';
import privateRoutes from '@/routes/private/privateRoutes';
import renderRoutes from '@/utils/router.util';

const InternalServerError = lazy(() => import('@/pages/ServerError'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));

/**
 * Define public router
 */

const PublicOutletRouter = () => {
  return <Outlet />;
};

interface IProtectedRouterProps {
  isAuth: boolean;
  children?: JSX.Element;
}

/**
 * Define protected router
 */
const ProtectedRouter = ({ isAuth, children }: IProtectedRouterProps) => {
  if (!isAuth) {
    return <Navigate to='/login' />;
  }

  return children || <Outlet />;
};

/**
 * Define all routes of App
 */
const AppRouter = () => {
  const [data] = useState(true);
  const [isSuccess] = useState(true);

  return (
    <>
      {isSuccess && (
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicOutletRouter />}>
              {renderRoutes(publicRoutes)}
            </Route>

            {/* Private Routes */}
            <Route element={<ProtectedRouter isAuth={data} />}>
              {renderRoutes(privateRoutes)}
            </Route>

            <Route
              path='/internal-server-error'
              element={
                <Suspense>
                  <InternalServerError />
                </Suspense>
              }
            />

            <Route
              path='*'
              element={
                <Suspense>
                  <PageNotFound />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default AppRouter;
