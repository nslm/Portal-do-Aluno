import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Notas from './notas.routes';
import Datas from './datas.routes';


const Tab = createBottomTabNavigator();


export default function ProvasRoutes() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Notas" component={Notas} />
        <Tab.Screen name="Datas" component={Datas} />
    </Tab.Navigator>
    );
  }