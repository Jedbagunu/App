import './App.css';

import {useState} from 'react'
import {UserProvider} from './UserContext'
import Banner from './components/Banner'
import AppNavbar from './components/AppNavbar'
import EntryRow from './components/EntryRow'
import PersonalView from './components/PersonalView'
import Home from './pages/Home'
import Entries from './pages/Entries'
import AdminView from './components/AdminView'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import Specific from './pages/Specific'
import MyEntries from './components/MyEntries'


import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom'


function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })

    const unsetUser = () => {
      localStorage.clear()
    }
  return (
  <>
      {/*Provides the user context throughout any component inside of it*/}
      <UserProvider value={{user, setUser, unsetUser}}>
          {/* Initialize route switching*/}
          <Router>
          <AppNavbar/>
          <Container > 
              <Routes> 
                <Route  path= "/" element={<Home/>}/>
                <Route  path= "/myentries" element={<MyEntries/>}/>
                <Route  path= "/productrow" element={<EntryRow/>}/>
                <Route  path= "/adminview" element={<AdminView/>}/>
                <Route  path= "/entries" element={<Entries/>}/>
                <Route  path= "/entries/:entryId" element={<Specific/>}/> 
                {/*<Route  path="/cart" element={<Cart/>}/>*/}
           {/*     <Route  path="/orders" element={<Orders/>}/>*/}
                <Route  path= "/login" element={<Login/>}/>
                <Route  path= "/register" element={<Register/>}/>
                <Route  path= "/logout" element={<Logout/>}/>
                <Route  path="*" element={<ErrorPage/>}/> 


   
              </Routes>
          </Container> 
          </Router>
      </UserProvider>
  </>

  )
}

export default App;
