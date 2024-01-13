import { Suspense } from 'react';
import { withErrorBoundary } from 'react-error-boundary';

import LoadingCenterLayout from '@/layouts/LoadingCenterLayout/LoadingCenterLayout';
import GeneralError from '@/features/AppErrorBoundaries/GeneralError';
import PageTitle from '@/components/Title/PageTitle';
import useTitle from '@/hooks/useTitle';

interface PageWrapperProps {
  children: JSX.Element;
  title: string;
  documentTitle: string;
}

const PageWrapper = ({ children, title, documentTitle }: PageWrapperProps) => {
  useTitle(documentTitle || title);

  return (
    <Suspense fallback={<LoadingCenterLayout />}>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </Suspense>
  );
};

export default withErrorBoundary(PageWrapper, {
  fallback: <GeneralError />,
  onError(error, info) {
    console.log('ERROR-BOUNDARY', error);
    console.log('INFO-ERROR-BOUNDARY', info);
    throw Error(error.message);
  }
});
