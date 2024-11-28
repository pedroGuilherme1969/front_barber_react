/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Barber from './pages/Barber'
import Login from './pages/Login'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Footer from './components/Footer'
import Register from './pages/Register'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/barbeiros' element={<Barber />}/>
        <Route path='/barbeiros/:speciality' element={<Barber />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/sobre' element={<About />}/>
        <Route path='/meu-perfil' element={<MyProfile />}/>
        <Route path='/servicos' element={<Services />}/>
        <Route path='/meus-agendamentos' element={<MyAppointments />}/>
        <Route path='/agendamento/:barberId' element={<Appointment />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App