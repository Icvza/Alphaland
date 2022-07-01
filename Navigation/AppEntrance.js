import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNav from './BottomNav'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
function getHeaderTitle(route) {
     const routeName =  getFocusedRouteNameFromRoute(route) ?? 'home'
     switch (routeName) {
          case 'home':
               return 'home'
          case 'CheckIn':
               return 'Check-in'
     }
}

function AppEntrance(){

     const Drawer = createDrawerNavigator()
     return(
          <Drawer.Navigator
          screenOptions={({navigation})=> ({
               headerShown: true,
               headerTransparent: true
          })}
          >
               <Drawer.Screen 
                    name='BottomTab' 
                    component={BottomTabNav} 
                    options={({route}) => ({
                         headerTitle: getHeaderTitle(route),
                    })}
               />
          </Drawer.Navigator>
     )
}


export default AppEntrance