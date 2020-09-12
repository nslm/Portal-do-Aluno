import React from 'react';
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

export default function Proprio() {

    return(
        <View style={styles.background}>
            <Text>
                proprio
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