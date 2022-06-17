import { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import AuthContent from '../../components/Auth/AuthContent'

function LoginScreen() {

    const [isLogingIn, setIsLogingIn] = useState(false)

    async function LoginHandler (email, password) {
        setIsLogingIn(true)
        try{
        await login (email, password)
        } catch(error) {
            console.log(error.response)
        }
        setIsLogingIn(false)
    }

    return (
        <View style={styles.LoginScreenContainer}>
            <AuthContent isLogin onAuthenticate={LoginHandler} />
            <Text>THIS IS THE LOGIN SCREEN </Text>
        </View>
    )
}

export default LoginScreen

styles = StyleSheet.create({
    LoginScreenContainer: {
        fles: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})

