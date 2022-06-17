import { View, StyleSheet} from 'react-native'
import { useState } from 'react'
import AuthContent from '../../components/Auth/AuthContent'
import { createUser } from '../../Utility/Auth/Auth'
import LoadingOverlay from '../Loading/LoadingOverlay'

function SignupScreen() {

    const [isAuthenticating, setIsAuthenticating ] = useState(false)

    async function SignupHandler({email, password}){
        setIsAuthenticating(true)
        try{
        await createUser(email, password)
        } catch(error) {
            console.log(error.response)
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
            <AuthContent  onAuthenticate={SignupHandler}/> 
        </View>
    )
}

export default SignupScreen

styles = StyleSheet.create({
    SignupScreenContainer: {
        fles: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})