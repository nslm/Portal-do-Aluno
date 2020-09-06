import React, {useState, useEffect} from 'react';
import { authLogin } from '../../services/auth';
import { View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput,  
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Animated,
  Keyboard 
  } from 'react-native';

export default function Login() {

  async function handleLogin() {
    const response = authLogin()
      console.log("senha aparecera aqui")
  }


  const [offsetY] = useState(new Animated.Value( 90 )); 
  const [offsetX] = useState(new Animated.Value( 0 ));
  const [opacity] = useState(new Animated.Value(0));

  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(()=> {
    Animated.spring(offsetY, {
      toValue: 0,
      speed: 4,
      bounciness: 15,
    }).start();
  }, []); 

  /*useEffect(()=> {
    keyboardIsShow = Keyboard.addListenner('keyboardIsShow', keyboardIsShow)
    keyboardIsShow = Keyboard.addListenner('keyboardIsShow', keyboardIsShow)

    Animated.spring(offsetY, {
      toValue: 0,
      speed: 3,
      bounciness: 15,    
    }).start();
  }, []); */

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containterLogo}>
        <Image 
        style={{
          width: 250,
          height: 250
        }}
        source={require('../../../assets/LogoEstat2.png')}
        />
      </View>    

      <Animated.View 
       style={[
        styles.container,
        { transform: [
            { translateY: offsetY }
          ]
        }
        ]}
      >

       <TextInput
       style={styles.input}
       placeholder="Matricula"
       autoCorrect={false}
       onChangeText={matricula => setMatricula(matricula)}
       defaultValue={matricula}
       />

       <TextInput
       secureTextEntry={true}
       style={styles.input}
       placeholder="Senha"
       autoCorrect={false}
       onChangeText={senha => setSenha(senha)}
       defaultValue={senha}
       />

       <TouchableOpacity 
       style={styles.btLogin}
       onPress={handleLogin}
       >
         <Text style={styles.login}>
           Login
         </Text>
       </TouchableOpacity>

      </Animated.View>  
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F9D9AB',
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center',
    resizeMode: "center",
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 45,
    paddingBottom: 50, //ajuste para a hora que o teclado sobe para digitar.
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    height: 45,
    marginBottom: 18,
    color: '#222',
    fontSize: 20,
    borderRadius: 7,
    padding: 12,
  },
  btLogin:{
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 45,
    borderRadius: 7,
  },
  login:{
    color: '#FFF',
    fontSize: 20,
  }
});