import React, { createContext, useReducer, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
//import { initialState, UserReducer } from '../reducers/user';
import  isLoged  from '../services/auth'

const axios = require('axios')

interface AuthContextData {
    loged: boolean;
    name: string; 
    token: string | null;
    Login(): Promise<void> | null;
}

export const AuthContext = createContext<AuthContextData>({loged: false, name : '', token : null, null});

export const AuthProvider: React.FC = ({ children }) => {

  const [token, setToken] = useState<object | null>(null);
  const [name, setName] = useState('');
  const [loged, setLoged] = useState(false);

  async function Login(matricula, senha) {  
    const response = await isLoged(matricula, senha);
    const {token} = response;
    const {name} = response;
    setToken(token);
    setName(name);
    if(token==null || token==''){
      setLoged(false)
    } else {
      setLoged(true)
    };
  };

  return (
      <AuthContext.Provider value={{loged : loged, name, token, Login}}>
          { children }
      </AuthContext.Provider>  
  );

};

export default AuthProvider;