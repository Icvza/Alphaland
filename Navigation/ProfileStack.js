import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../screens/App/Profile'
const Drawer = createDrawerNavigator() 

function ProfileStack () {
    console.log('open')
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
    )
}

export default ProfileStack