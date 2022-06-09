import { View, Text, StyleSheet} from 'react-native'
import AuthContent from '../../components/Auth/AuthContent'

function LoginScreen() {
    return (
        <View style={styles.LoginScreenContainer}>
            <AuthContent isLogin />
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

