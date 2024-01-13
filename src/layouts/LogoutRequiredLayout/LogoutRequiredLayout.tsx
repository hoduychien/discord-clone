import { Navigate, useLocation } from 'react-router-dom';

import { PRIVATE_URL } from '@/constants/urls';
import { useState } from 'react';

interface LogoutRequiredLayoutProps {
  children: JSX.Element;
  pathname: string;
}

const LogoutRequiredLayout = ({
  children,
  pathname
}: LogoutRequiredLayoutProps) => {
  const location = useLocation();
  const [user] = useState<boolean>(false);

  if (user) {
    if (location.pathname === pathname) {
      return <Navigate to={PRIVATE_URL.home} replace />;
    }
    return <Navigate to={pathname} replace />;
  }

  return children;
};

export default LogoutRequiredLayout;
