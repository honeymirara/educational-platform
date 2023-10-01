import './App.css'

import RoutesProvider from './RoutesProvider/RoutesProvider';
import useAuth from './hook/useAuth';
import MyContext from './Context/Context';

export default function App() {
const {token, logIn, logOut} = useAuth()
  const routes = RoutesProvider(token)

  return (
      <MyContext.Provider value={{token, logIn, logOut}}>
        {routes}
      </MyContext.Provider>
      
  )
 }
