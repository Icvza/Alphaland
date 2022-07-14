import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeFeed from "../screens/App/HomeFeed";
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import CheckIn from "../screens/App/CheckIn";
import { GlobalStyles } from "../Constants/colors";
const BottomTab = createBottomTabNavigator()

function BottomTabNav() { 
     return(
          <BottomTab.Navigator>
               <BottomTab.Screen 
                    name='home'
                    component={HomeFeed}
                    options={{
                         tabBarIcon: ({color, size}) => 
                              <Ionicons name='home' size={size} color={GlobalStyles.colors.tertiaryColor}/>,
                         title: 'home',
                         headerShown: false 
               }}
          />
          <BottomTab.Screen
               name='CheckIn'
               component={CheckIn}
               options={{
                    tabBarIcon: ({color, size}) => 
                         <Ionicons name="ios-barcode-outline" size={size} color={GlobalStyles.colors.tertiaryColor}/>,
                    title: 'Check-in',
                    headerShown: false
               }}
          />
          <BottomTab.Screen
               name='Alpha Eats'
               component={() => {}}
               options={{
                    tabBarIcon: ({color, size}) => 
                         <MaterialCommunityIcons name="food-variant" size={size} color={GlobalStyles.colors.tertiaryColor} />,
                    title: 'Alpha Eats',
                    headerShown: false
               }}
          />
          <BottomTab.Screen
               name='Classes'
               component={() => {}}
               options={{
                    tabBarIcon: ({color, size}) => 
                         <FontAwesome name="group" size={size} color={GlobalStyles.colors.tertiaryColor}/>,
                    title: 'Classesx',
                    headerShown: false
               }}
          />
          </BottomTab.Navigator>
     )
}

export default BottomTabNav