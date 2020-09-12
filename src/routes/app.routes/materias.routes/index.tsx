import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Inscritas from './inscritas.routes';
import Cursadas from './cursadas.routes';
import A_Cursar from './a.cursar.routes';


const Tab = createBottomTabNavigator();


export default function ProvasRoutes() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Inscritas" component={Inscritas} />
        <Tab.Screen name="Cursadas" component={Cursadas} />
        <Tab.Screen name="A_Cursar" component={A_Cursar} />
    </Tab.Navigator>
    );
  }