 import React from 'react'; 
 import { createStackNavigator } from '@react-navigation/stack';  

 import Preload from '../pages/Preload';

 const PreloadStack = createStackNavigator();

 const PreloadRoutes: React.FC = () => (
     <PreloadStack.Navigator         
         screenOptions={{
            headerShown: false
       }}
     >
         <PreloadStack.Screen name="Preload" component={Preload} /> 
     </PreloadStack.Navigator>
 );

 export default PreloadRoutes;