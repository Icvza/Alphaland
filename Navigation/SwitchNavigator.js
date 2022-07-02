import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppEntrance from './AppEntrance'
import {useContext} from 'react'
import { AuthContext } from "../store/auth-context";
import RightDrawer from "./RightDrawer";

function SwitchNavigator() {

    const authContext = useContext(AuthContext) 
    
    return (
            <NavigationContainer>
                {!authContext.isAuthenticated &&<AuthStack />}
                {authContext.isAuthenticated &&<RightDrawer />}
            </NavigationContainer>
    )
}

export default SwitchNavigator


