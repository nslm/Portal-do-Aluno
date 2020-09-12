import AsyncStorage from '@react-native-community/async-storage';

export function GetItem(item) {

    try {

      const response =  AsyncStorage.getItem(item); 
      return response
  
    } catch (error) {
  
      console.log("Error to get saved data");
  
    }
};