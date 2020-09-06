import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import isLogin from '../services/auth'

const Routes: React.FC = () => {
    if(isLogin){
        return <AppRoutes />;
    }
    if(isLogin){
        return <AuthRoutes />;
    }
};

export default Routes;