import { View, Text, StyleSheet} from 'react-native'
import AuthContent from '../../components/Auth/AuthContent'
function SignupScreen() {
    return (
        <View style={styles.SignupScreenContainer}>
            <AuthContent /> 
            <Text>THIS IS THE SIGNUP SCREEN </Text>
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