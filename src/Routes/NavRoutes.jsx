import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../Components/Signin'
import Register from '../Components/Register'
import Home from '../pages/Home'
import ExamPage from '../pages/ExamPage'
import Adminpannel from '../pages/Adminpannel'

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/exam" element={<ExamPage />} />
      <Route path='/admin' element={<Adminpannel />} />
    </Routes>
  )
}

export default NavRoutes