import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios');

async function SaveToken(token) {
  try {
    await AsyncStorage.setItem(
      'token', 
      token
    );
  } catch (error) {
    console.log("Error saving data")
  }
};


export default async function authLogin(matricula,senha) {
    const url = 'https://portal-do-aluno.herokuapp.com/';
    var token = null;
    var name =  '';
    var loged = false;
    
    const params = {
      matricula: matricula,
      senha: senha
    }

    let res = await axios.post(url, params);
    if(res.data["Status"]){
      SaveToken(res.data["token"]);
      token = res.data["token"];
      name = res.data["name"];
      loged =  true;
    } else {
      console.log("matricula ou senha incorreta");
          };    

    return ({loged, name, token});

    };


