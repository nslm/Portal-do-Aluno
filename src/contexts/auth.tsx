import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import  DoLogin  from '../services/auth'
import {  GetItem } from '../services/storage'
interface AuthContextData {
    matricula: string | null;
    senha: string | null;
    name: string | null;

}


export const AuthContext = createContext<AuthContextData>({ matricula:null, senha:null, name:null});

export const AuthProvider: React.FC = ({ children }) => {

    //const [matricula, setMatricula] = useState(null);
    //const [senha, setSenha] = useState(null);
    //const [name, setName] = useState<string | null>(null);
  
    //setMatricula(GetItem('matricula'));
    //setSenha(GetItem('senha'));
    const name = GetItem('name');

    return (
      <AuthContext.Provider value={{matricula:null, senha:null, name: name}}>
          { children }
      </AuthContext.Provider>  
    );

};

export default AuthProvider;