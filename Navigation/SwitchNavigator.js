import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from './AppStack'
import {useContext} from 'react'
import { AuthContext } from "../store/auth-context";


function SwitchNavigator() {

    const authContext = useContext(AuthContext) 
    
    return (
            <NavigationContainer>
                {!authContext.isAuthenticated &&<AuthStack />}
                {authContext.isAuthenticated &&<AppStack />}
            </NavigationContainer>
    )
}

export default SwitchNavigator


