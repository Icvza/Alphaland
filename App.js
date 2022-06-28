import SwitchNavigator from './Navigation/SwitchNavigator';
import AuthContextProvider from "./store/auth-context";




export default function App() {
  return (
    <AuthContextProvider>
      <SwitchNavigator />
    </AuthContextProvider>
  )
}


