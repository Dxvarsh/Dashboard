import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Routing