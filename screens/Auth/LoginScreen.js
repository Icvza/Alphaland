import { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import AuthContent from '../../components/Auth/AuthContent'
import { loginUser } from '../../Utility/Auth/Auth'
function LoginScreen() {

    const [isLogingIn, setIsLogingIn] = useState(false)

    async function LoginHandler({email, password}){
        setIsLogingIn(true)
        try{
        await loginUser(email, password)
        } catch(error) {
            console.log('Login Error', error)
        }
        setIsLogingIn(false)
    }

    return (
        <View style={styles.LoginScreenContainer}>
            <AuthContent isLogin onAuthenticate={LoginHandler} />
        </View>
    )
}

export default LoginScreen

styles = StyleSheet.create({
    LoginScreenContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        
    }
})

