import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNav from './BottomNav'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import IconButton from '../components/UI/IconButton';
import AlphLandCircle from '../components/Media/AlphalandCircleLogo';
import { Text } from 'react-native'
import ProfileStack from './ProfileStack'
function getHeaderTitle(route) {
     const routeName =  getFocusedRouteNameFromRoute(route) ?? 'home'
     switch (routeName) {
          case 'home':
               return 'home'
          case 'CheckIn':
               return <Text>Check-in</Text>
     }
}

function openProfile(){
     return(
          <ProfileStack />
     )
}

function AppEntrance(){

     const Drawer = createDrawerNavigator()
     return(
          <Drawer.Navigator
          screenOptions={({navigation})=> ({
               headerShown: true,
               headerTransparent: true,
               headerRight: ({tintColor}) => 
                    <IconButton 
                         icon='ios-person-circle-outline' 
                         size={30} 
                         color={'white'}
                         onPress={openProfile}
                    />,
          })}
          >
               <Drawer.Screen 
                    name='Home' 
                    component={BottomTabNav} 
                    options={({route}) => ({
                         headerTitle: () => (routeOrLogo(route))
                    })}
               />
          </Drawer.Navigator>
     )
}

function routeOrLogo (route) {
     if (getHeaderTitle(route) === 'home') {
          return <AlphLandCircle />
     } else {
          return (getHeaderTitle(route))
     }
}

//console.log(getHeaderTitle(route))


export default AppEntrance

