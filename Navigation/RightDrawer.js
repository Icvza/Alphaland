import { View, Text } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppEntrance from "./AppEntrance";
import { DrawerContent } from '../components/RightDrawer/RightDrawerContent'
const DrawerRight = createDrawerNavigator()

function RightDrawer () {
     return (
          <DrawerRight.Navigator
               useLegacyImplementation
               id="RightDrawer"
               drawerContent={(props) => <DrawerContent {...props} />}
               screenOptions={{drawerPosition: 'right', headerShown: false,}}
          >
               <DrawerRight.Screen name='home' component={AppEntrance} />
          </DrawerRight.Navigator>
     )
}

function RightDrawerContent() {
     return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>This is the right drawer</Text>
          </View>
     )
}

export default RightDrawer