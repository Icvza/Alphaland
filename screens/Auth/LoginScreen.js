import { useContext, useState } from 'react'
import { View, StyleSheet} from 'react-native'
import AuthContent from '../../components/Auth/AuthContent'
import { loginUser } from '../../Utility/Auth/Auth'
import AuthVideo from './AuthVideo'
import { AuthContext } from '../../store/auth-context'

function LoginScreen() {

    const [isLogingIn, setIsLogingIn] = useState(false)

    const authContent = useContext(AuthContext)

    async function LoginHandler({email, password}){
        setIsLogingIn(true)
        try{
            const token = await loginUser(email, password)
            authContent.authenticate(token)
        } catch(error) {
            console.log('Login Error', error)
            setIsAuthenticating(false)
        }
    }

    return (
            <View style={styles.LoginScreenContainer}>
                <AuthVideo  />
                <AuthContent isLogin onAuthenticate={LoginHandler}  style={styles.AuthContent} />
            </View>
    )
}

export default LoginScreen

styles = StyleSheet.create({

})

