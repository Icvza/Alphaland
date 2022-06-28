import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeFeed from '../screens/App/HomeFeed'

function AppStack(){

     const Stack = createNativeStackNavigator()

     return(
          <Stack.Navigator>
               <Stack.Screen name='HomeFeed' component={HomeFeed} />
          </Stack.Navigator>
     )
}

export default AppStack