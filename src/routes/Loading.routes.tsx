 import React from 'react'; 
 import { createStackNavigator } from '@react-navigation/stack';  

 import Loading from '../pages/Loading';

 const LoadingStack = createStackNavigator();

 const PreloadRoutes: React.FC = () => (
     <LoadingStack.Navigator         
         screenOptions={{
            headerShown: false
       }}
     >
         <LoadingStack.Screen name="Loading" component={Loading} /> 
     </LoadingStack.Navigator>
 );

 export default PreloadRoutes;