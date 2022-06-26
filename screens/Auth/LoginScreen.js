import { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import AuthContent from '../../components/Auth/AuthContent'
import { loginUser } from '../../Utility/Auth/Auth'
import AuthVideo from './AuthVideo'
import { BlurView } from 'expo-blur'
import Logo from '../../components/Media/AlphalandCircleLogo'

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
                <AuthVideo />
                <AuthContent isLogin onAuthenticate={LoginHandler}  style={styles.AuthContent}/>
            </View>
    )
}

export default LoginScreen

styles = StyleSheet.create({

})

