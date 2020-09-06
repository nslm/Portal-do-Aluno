 import React from 'react'; 
 import { createStackNavigator } from '@react-navigation/stack';  

 import Preload from '../pages/Preload';

 const AuthStack = createStackNavigator();

 const AuthRoutes: React.FC = () => (
     <AuthStack.Navigator         
         screenOptions={{
            headerShown: false
       }}
     >
         <AuthStack.Screen name="Preload" component={Preload} /> 
     </AuthStack.Navigator>
 );

 export default AuthRoutes;