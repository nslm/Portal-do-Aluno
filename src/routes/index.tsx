import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import PreloadRoutes from './preloud.routes';
import isLogin from '../services/auth';
import { useNavigation } from '@react-navigation/native';

const Routes: React.FC = () => {
    
    const navigation = useNavigation();

    useEffect(()=>{ 
        navigation.navigate('PreloadRoutes')

        const checkToken = async () => {
            const token = await asyncStorage.getItem('token');
            if(token) {
                // validar token
            } else {
                navigation.navigate('AuthRoutes')
            }
        }
        checkToken();
    }, []);
    
};

export default Routes;