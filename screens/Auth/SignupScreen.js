import { View, StyleSheet, } from 'react-native'
import { useContext, useState } from 'react'
import AuthContent from '../../components/Auth/AuthContent'
import { createUser } from '../../Utility/Auth/Auth'
import LoadingOverlay from '../Loading/LoadingOverlay'
import AuthVideo from './AuthVideo'
import { AuthContext } from '../../store/auth-context'

function SignupScreen() {

    const [isAuthenticating, setIsAuthenticating ] = useState(false)
    const authContext = useContext(AuthContext)

    async function SignupHandler({email, password}){
        setIsAuthenticating(true)
        try{
        const token = await createUser(email, password)
        authContext.authenticate(token)
        } catch(error) {
            console.log('Signup',error.data)
        }
        setIsAuthenticating(false)
    }

    if(isAuthenticating){
        return(
            <LoadingOverlay />
        )
    }


    return (
        <View style={styles.SignupScreenContainer}>
            <AuthVideo />
            <AuthContent  onAuthenticate={SignupHandler} stytle={styles.AuthContent} BottomFeeder/> 
        </View>
    )
}

export default SignupScreen

styles = StyleSheet.create({

})