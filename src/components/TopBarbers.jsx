/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopBarbers = () => {

    const navigate = useNavigate()
    const {barbers} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:px-10'>
        <h1 className='text-3xl font-medium'>Barbeiros populares</h1>
        <p className='sm:w-1/3 text-center text-sm'>Esses são os barbeiros mais procurados na nossa plataforma.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {barbers.slice(0,10).map((item, index) => (
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
            ))}
        </div>
        <button onClick={() => { navigate('/barbeiros'); scrollTo(0,0) }} className='bg-gray-600 text-white px-12 py-3 rounded-full mt-10'>Ver Mais</button>
    </div>
  )
}

export default TopBarbers