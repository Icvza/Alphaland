import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeFeed from "../screens/App/HomeFeed";
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import CheckIn from "../screens/App/CheckIn";
import { GlobalStyles } from "../Constants/colors";
import { BlurView } from "expo-blur";

const BottomTab = createBottomTabNavigator()

function BottomTabNav() { 
     return(
          <BottomTab.Navigator
          screenOptions={({navigation})=> ({
               tabBarActiveTintColor: "orange",
               tabBarInactiveTintColor: "white",
               tabBarActiveBackgroundColor: "#000",
               tabBarInactiveBackgroundColor: "#000",
               tabBarStyle: {
                    backgroundColor: 'black',
                    borderTopWidth: 0
               }
          })}
               >
               <BottomTab.Screen 
                    name='home'
                    component={HomeFeed}
                    options={{
                         tabBarIcon: ({focused, size}) => (
                              <Ionicons name='home' size={size} color={focused? GlobalStyles.colors.tertiaryColor : 'white'}/>
                              ),
                         title: 'home',
                         headerShown: false
               }}
          />
          <BottomTab.Screen
               name='CheckIn'
               component={CheckIn}
               options={{
                    tabBarIcon: ({focused, size}) => (
                         <Ionicons name="ios-barcode-outline" size={size} color={focused? GlobalStyles.colors.tertiaryColor : 'white'}/>
                    ),
                    title: 'Check-in',
                    headerShown: false
               }}
          />
          <BottomTab.Screen
               name='Alpha Eats'
               component={() => {}}
               options={{
                    tabBarIcon: ({focused, size}) => (
                         <MaterialCommunityIcons name="food-variant" size={size} color={focused? GlobalStyles.colors.tertiaryColor : 'white'} />
                         ),
                    title: 'Alpha Eats',
                    headerShown: false
               }}
          />
          <BottomTab.Screen
               name='Classes'
               component={() => {}}
               options={{
                    tabBarIcon: ({focused, size}) => (
                         <FontAwesome name="group" size={size} color={focused? GlobalStyles.colors.tertiaryColor : 'white'}/>
                         ),
                    title: 'Classesx',
                    headerShown: false
               }}
          />
          </BottomTab.Navigator>
     )
}

export default BottomTabNav