import React, { useContext } from 'react' ;
import { AuthContext } from '../../contexts/auth';
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

export default function Dashboard() {

    const { name } = useContext(AuthContext);

    return(
        <View style={styles.background}>
            <Text>
                dashboard
                {name}
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