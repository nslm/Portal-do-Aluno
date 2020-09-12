import React, { useEffect } from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';  
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import Login from '../../pages/Login';
import Loading from '../../pages/Login/loading';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {

   /* const navigation = useNavigation();

    useEffect(() =>{
        const checkName = async () => {
            const name = AsyncStorage.getItem('name');
            if(name === null){
                navigation.navigate('Login')
            }
        }
        checkName();
    }, []); */

    return(
    <AuthStack.Navigator         
        screenOptions={{
           headerShown: false
      }}
      >
        <AuthStack.Screen name="Login" component={Login} /> 
      <AuthStack.Screen name="Loading" component={Loading} /> 
    </AuthStack.Navigator>
);
};

export default AuthRoutes;