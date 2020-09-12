import React from 'react';
import DoLogoff from '../../../services/logoff'
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

async function handleLogoff() {
    await DoLogoff();
    
};

export default function Logoff() {

    return(
        <View style={styles.background}>
            <Text>
                deseja fazer o logoff?
            </Text>
            <TouchableOpacity
            //style={styles.btLogin}
            onPress={handleLogoff}
            >
                <Text>
                    sim
                </Text>

            </TouchableOpacity>
        </View>

    );

};

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#F9D9AB',
    },
    btLogin:{
        backgroundColor: '#191970',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 45,
        borderRadius: 7,
    }

});