import React, { useState } from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
//import AsyncStorage from '@react-native-community/async-storage';
import { GetItem } from '../services/storage'




const  Routes: React.FC = () => {
  
  const name = GetItem('name');
  //const senha = GetItem('senha')
  console.log('name')
  console.log(name)

  if( name ) {  
      return < AuthRoutes />;
        
  } else { 

      return < AppRoutes />;

  }
    
    
};

export default Routes;