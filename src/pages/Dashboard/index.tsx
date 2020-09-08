import React from 'react' ;
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
//const spawn = require("child_process").spawn;


export default function Dashboard() {
    return(
        <View style={styles.background}>
            <Text>
                dashboard
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