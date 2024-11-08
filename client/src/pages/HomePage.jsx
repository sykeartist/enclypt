import React, { Suspense } from 'react';
import Loader from '../components/Loader';

const Home = React.lazy(() => import('../components/Home'));

const HomePage = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Home />
            </Suspense>
        </div>
    );
};

export default HomePage;