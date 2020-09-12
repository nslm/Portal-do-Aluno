import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeRoutes from './home.routes';
import ProvasRoutes from './provas.routes';
import HorariosRoutes from './horarios.routes';
import MateriasRoutes from './materias.routes';
import CalendarioRoutes from './calendario.routes';
import LogoffRoutes from './logoff.routes';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeRoutes} />
        <Drawer.Screen name="Provas" component={ProvasRoutes} />
        <Drawer.Screen name="Horarios" component={HorariosRoutes} />
        <Drawer.Screen name="Materias" component={MateriasRoutes} />
        <Drawer.Screen name="Calendario" component={CalendarioRoutes} />
        <Drawer.Screen name="Logoff" component={LogoffRoutes} />
      </Drawer.Navigator>
  );
};