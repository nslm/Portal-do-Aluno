import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';
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


export default function Home() { 

    const { name } = useContext(AuthContext);
    var name2 = ''
    if( name == null){
        name2 = name
    }

    return(
        <View style={styles.background}>
            <Text>
                bem vindo { name2 }
            </Text>    
        </View>

    );

};

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#F9D9AB',
    }});