import {View, StyleSheet, Alert, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {useState} from 'react'
import AuthForm from './AuthForm'
import FlatButton from '../UI/FlatButton'


function AuthContent ({isLogin, onAuthenticate, BottomFeeder}) {
        
    const navigation = useNavigation()

    const[credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false,
    })

    function switchAuthModeHandler() {
        if(isLogin) {
            navigation.navigate('SignUp')
        } else {
            navigation.navigate('Login')
        }
    }

    function submitHandler(credentials){
        let {email, confirmEmail, password, confirmPassword} = credentials

        email = email.trim()
        password = password.trim()

        const emailIsValid = email.includes('@')
        const passwordIsValid = password.length > 6
        const emailsAreEqual = email === confirmEmail
        const passwordsAreEqual = password === confirmPassword


        if (
            !emailIsValid ||
            !passwordIsValid ||
            (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
            ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
                confirmEmail: !emailIsValid || !emailsAreEqual,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
            })
            return
            }
            onAuthenticate({ email, password });
        }    

    return (
        <View style={styles.container}>
            <View style={styles.authContent && isLogin? styles.left : styles.right } >
                <AuthForm
                    isLogin={isLogin}
                    onSubmit={submitHandler}
                    credentialsInvalid={credentialsInvalid}
                />
                <View style={styles.buttons}>
                    <FlatButton onPress={switchAuthModeHandler}>
                    {isLogin ? 'Create a new user' : 'Log in instead'}
                    </FlatButton>
                </View>
            </View>
        </View>
    )
}

export default AuthContent


const styles = StyleSheet.create({
    left:{
        justifyContent:'center',
        alignContent: 'center',
        justifyContent: 'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 525,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'transparent',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        bottom: 0
    },
    right:{
        justifyContent:'center',
        alignContent: 'center',
        justifyContent: 'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 525,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'transparent',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        bottom: 90
    },
    authContent: {
        justifyContent:'center',
        alignContent: 'center',
        justifyContent: 'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 525,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'transparent',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        bottom: 0
    },
    buttons: {
        marginTop: 20,
    },
});