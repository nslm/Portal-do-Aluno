import React from 'react';
import { View , Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

const spawn = require("child_process").spawn;
const pythonProcess = spawn('python', ["../../../scraper.py", matricula, senha]);
var texto: string;
pythonProcess.stdout.on('data', (data) => { texto = data });

export default function Dashboard() {

    return(
        <View>
            <Text>
                preload
            </Text>
        </View>

    );

};