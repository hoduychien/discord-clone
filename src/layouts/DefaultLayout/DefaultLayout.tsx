import { type HTMLAttributes, type ReactNode } from 'react';

interface IDefaultLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const DefaultLayout = ({ children, ...passProps }: IDefaultLayoutProps) => {
  return <div {...passProps}>{children}</div>;
};

export default DefaultLayout;
