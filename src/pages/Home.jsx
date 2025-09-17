import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen flex align-center justify-center flex-col gap-2'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/admin/dashboard">Dashboard</NavLink>
    </div>
  )
}

export default Home