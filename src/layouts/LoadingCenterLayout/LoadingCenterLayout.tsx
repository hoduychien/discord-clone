import { Spinner } from '@nextui-org/react';

const LoadingCenterLayout = () => {
  return (
    <div className='fixed inset-0 grid items-center'>
      <Spinner />
    </div>
  );
};

export default LoadingCenterLayout;
