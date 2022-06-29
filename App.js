import SwitchNavigator from './Navigation/SwitchNavigator';
import AuthContextProvider from "./store/auth-context";
import {useState, useEffect, useContext } from 'react'
import AuthContextProvider from './store/auth-context';
import { AsyncStorage } from 'react-native';

function Root () {
  const [isTryingLogin, setIstryingLogin] = useState(true)
  const authContext = useContext(AuthContextProvider)

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token')
      if (storedToken) {
        authContext.
      }
    }
  }, [])

}


export default function App() {
  return (
    <AuthContextProvider>
      <SwitchNavigator />
    </AuthContextProvider>
  )
}


