import React, { Suspense } from 'react';
import Loader from '../components/Loader';

const Registration = React.lazy(() => import('../components/Registration'));
const RegistrationPage = () => {
  return (
    <>
    <div>
        
          <Suspense fallback={<Loader/>}>
          <Registration />
          </Suspense>
        
    </div>
    </>
  );
};

export default RegistrationPage;
