import './App.css'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>Saikat Das</h1>
      <Login />
      <Profile />
    </ UserContextProvider>
  )
}

export default App