import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default async function Logoff() {
 {
        try {

          await AsyncStorage.removeItem('matricula');
          await AsyncStorage.removeItem('senha');
          await AsyncStorage.removeItem('name');
          console.log('usuario apagado')
          
          const navigation = useNavigation();
          navigation.navigate('Login')

        } catch (error) {

          console.log("Error to remove data")
          
        }
      };

}   