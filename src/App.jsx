import React from 'react'
import Login from './pages/Login'
import { Route,Routes } from 'react-router-dom'
import Forget from './pages/Forget'
import Register from './pages/Register'
import DashBoard from './pages/DashBoard'
import About from './pages/About'
import Patientdashboard from './pages/Patientdashboard'
const App = () => {
  return (
    <div>
    
      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/forgot' element={<Forget/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/about' element={<About/>}/> 
        <Route path='/patdashboard' element={<Patientdashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
