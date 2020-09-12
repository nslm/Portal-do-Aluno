import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Geral from './geral.routes';
import Proprio from './proprio.routes';


const Tab = createBottomTabNavigator();


export default function ProvasRoutes() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Geral" component={Geral} />
        <Tab.Screen name="Proprio" component={Proprio} />
    </Tab.Navigator>
    );
  }