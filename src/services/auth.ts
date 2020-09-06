import matricula from '../pages/Login';
import senha from '../pages/Login';
//const spawn = require("child_process").spawn;
//const pythonProcess = spawn('python', ["../../login.py", matricula, senha]);
//var isLogin: boolean;
//pythonProcess.stdout.on('data', (data) => { isLogin = data });

export default function authLogin() {
    
    fetch('https://portalence.ibge.gov.br/gcad-aluno/', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue'
    });
};