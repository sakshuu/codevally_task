import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MyNavbar } from './components'
import { Home, Login, SignUp, TaskForm } from './pages'
import "./app.css"

const App = () => {
  return <>
  
   <MyNavbar/>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='Task' element={<TaskForm/>}/>
<Route path='login' element={<Login/>}/>
<Route path='signup' element={<SignUp/>}/>
<Route/>
 </Routes>

  </>
}

export default App