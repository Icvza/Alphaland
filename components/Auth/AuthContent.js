import {View, Text, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {useState} from 'react'
import AuthForm from './AuthForm'

function AuthContent ({isLogin, onAuthenticate}) {
    
    const navigation = useNavigation()

    const[credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false,
    })

    function switchAuthModeHandler() {
        if(isLogin) {
            navigation.navigate('Signup')
        } else {
            navigation.navigate('Login')
        }
    }

    function submitHandler(){
        
    }

    return (
        <View>
        </View>
    )
}

export default AuthContent