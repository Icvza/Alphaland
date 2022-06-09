import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

function SwitchNavigator() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}

export default SwitchNavigator