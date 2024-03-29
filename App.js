import SwitchNavigator from './Navigation/SwitchNavigator'
import {useState, useEffect, useContext } from 'react'
import AuthContextProvider, {AuthContext} from './store/auth-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font'
//Move this into Component or constant folder since its just logic 
function Root () {
  const [isTryingLogin, setIstryingLogin] = useState(true)
  const authContext = useContext(AuthContext)

  const [fontsLoaded] = useFonts({
    'bebas-Neue': require('./assets/fonts/BebasNeue-Regular.ttf')
  })

  
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token')
      if (storedToken) {
        authContext.authenticate(storedToken)
      }
      setIstryingLogin(false)
    }
    fetchToken()
  }, [])

  if (isTryingLogin){
    return <AppLoading />
  } else if(!fontsLoaded) {
    return <AppLoading />
  }

  return <SwitchNavigator />

}


export default function App() {

  return (
    <AuthContextProvider>
      <Root/>
    </AuthContextProvider>
  )
}


