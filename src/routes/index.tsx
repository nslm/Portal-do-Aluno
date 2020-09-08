import React, { useContext } from 'react';
//import { useEffect } from 'react-native'
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
//import PreloadRoutes from './preload.routes';
import { AuthContext } from '../contexts/auth';
//import { useNavigation } from '@react-navigation/native';

const Routes: React.FC = () => {
    const { loged } = useContext(AuthContext);
    
    if( loged==true ){
        return < AppRoutes />;
    } else {
        return < AuthRoutes />;
    }

 
    
    
};

export default Routes;