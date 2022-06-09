import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/Auth/LoginScreen'
import SignupScreen from "../screens/Auth/SignupScreen";

const Stack = createNativeStackNavigator()

function AuthStack(){
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'blue'},
            headerTintColor: 'yellow',
            contentStyle: { backgrounfColor: 'green'}
        }}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='SignUp' component={SignupScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack