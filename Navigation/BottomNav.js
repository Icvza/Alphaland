import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeFeed from "../screens/App/HomeFeed";
import { Ionicons } from '@expo/vector-icons'
import CheckIn from "../screens/App/CheckIn";
const BottomTab = createBottomTabNavigator()

function BottomTabNav() { 
     return(
          <BottomTab.Navigator>
               <BottomTab.Screen 
                    name='home'
                    component={HomeFeed}
                    options={{
                         tabBarIcon: ({color, size}) => 
                              <Ionicons name='home' size={size} color={color}/>,
                         title: 'home',
                         headerShown: false 
               }}
          />
          <BottomTab.Screen
               name='CheckIn'
               component={CheckIn}
               options={{
                    tabBarIcon: ({color, size}) => 
                         <Ionicons name="ios-barcode-outline" size={size} color={color} />,
                    title: 'Check-in',
                    headerShown: false
               }}
          />
          </BottomTab.Navigator>
     )
}

export default BottomTabNav