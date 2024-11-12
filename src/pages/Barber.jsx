/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Barber = () => {

  const { speciality } = useParams()

  const [filterBarber, setFilterBarber] = useState([])

  const navigate = useNavigate()

  const {barbers} = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterBarber(barbers.filter(barb => barb.speciality === speciality))
    } else{
      setFilterBarber(barbers)
    }
  }

  useEffect(() => {
    applyFilter()
  },[barbers, speciality])

  return (
    <div>
      <p className='text-gray-600'>Encontre os barbeiros pela especialidade.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={() => speciality === 'Corte de Cabelo' ? navigate ('/barbeiros'): navigate('/barbeiros/Corte de Cabelo')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Corte de Cabelo" ? "bg-gray-600 text-white": ""}`}>Corte de Cabelo</p>
          <p onClick={() => speciality === 'Aparar Barba' ? navigate ('/barbeiros'): navigate('/barbeiros/Aparar Barba')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Aparar Barba" ? "bg-gray-600 text-white": ""}`}>Aparar Barba</p>
          <p onClick={() => speciality === 'Barba' ? navigate ('/barbeiros'): navigate('/barbeiros/Barba')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Barba" ? "bg-gray-600 text-white": ""}`}>Barba</p>
          <p onClick={() => speciality === 'Corte Infantil' ? navigate ('/barbeiros'): navigate('/barbeiros/Corte Infantil')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Corte Infantil" ? "bg-gray-600 text-white": ""}`}>Corte Infantil</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterBarber.map((item, index) => (
              <div onClick={() => navigate(`/agendamento/${item._id}`)} className='border border=blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-50' src={item.image} alt="" />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-purple-900'>
                          <p className='w-2 h-2 bg-purple-900 rounded-full'></p><p>Disponivel</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
              </div>
          )) 
          }
        </div>
      </div>
    </div>

  )
}

export default Barber