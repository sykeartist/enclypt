import React, { Suspense } from 'react';
import Loader from '../components/Loader';

const Login = React.lazy(() => import('../components/Login'));

const LoginPage = () => {
    return (
        <div>
                <Suspense fallback={<Loader/>}>
                    <Login />
                </Suspense>
            
        </div>
    );
};

export default LoginPage;