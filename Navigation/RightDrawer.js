import { createDrawerNavigator } from "@react-navigation/drawer";
import AppEntrance from "./AppEntrance";
const DrawerRight = createDrawerNavigator()

function RightDrawer () {
     return (
          <DrawerRight.Navigator
               useLegacyImplementation
               id="RightDrawer"
               screenOptions={{drawerPosition: 'right'}}
          >
               <DrawerRight.Screen name='home' component={AppEntrance} />
          </DrawerRight.Navigator>
     )
}

export default RightDrawer