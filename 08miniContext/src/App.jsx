import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './component/login'
import Profile from './component/profile'


function App() {
 
  return (
    <UserContextProvider>
      <h1>This is Mariner Barkat</h1>
      <login/>
      <profile/>
    </UserContextProvider>
  )
}

export default App
