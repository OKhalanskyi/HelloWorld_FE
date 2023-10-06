import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routerConfig } from '@/app/router/routerConfig.tsx';
import Loader from '@/components/Loader/Loader.tsx';

const Router = () => {
  const router = useRoutes(routerConfig)

  return (
    <Suspense fallback={<Loader />}>
      {router}
    </Suspense>
  );
};

export default Router;