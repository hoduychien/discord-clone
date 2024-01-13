import { type HTMLAttributes } from 'react';
import { Trans } from 'react-i18next';

interface IPageTitleProps extends HTMLAttributes<HTMLHeadElement> {}

const PageTitle = ({ children, ...passProps }: IPageTitleProps) => {
  return (
    <h1 className='mb-8 text-[32px] font-semibold' {...passProps}>
      <Trans>{children}</Trans>
    </h1>
  );
};

export default PageTitle;
