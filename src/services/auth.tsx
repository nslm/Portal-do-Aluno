import AsyncStorage from '@react-native-community/async-storage';
import { GetItem } from './storage'

const axios = require('axios');

async function SaveUser(matricula, senha,  name) {
  try {
    await AsyncStorage.setItem(
      'matricula', 
       matricula
    );
    await AsyncStorage.setItem(
      'senha', 
       senha
    );
    await AsyncStorage.setItem(
      'name', 
       name
    );
  } catch (error) {
    console.log("Error to saving data")
  }
};


export default async function authLogin(matricula, senha) {
    const url = 'https://portal-do-aluno.herokuapp.com/login';
    var name:String | null = null
    const user = {
      matricula: matricula,
      senha: senha
    }

    let res = await axios.post(url, user);
    if(res.data["status"]){
      console.log('logado')
      name = res.data["name"];
      SaveUser(matricula, senha, name);
    } else {
      console.log("matricula ou senha incorreta");
          };

    };


