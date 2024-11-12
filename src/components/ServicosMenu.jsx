// eslint-disable-next-line no-unused-vars
import React from 'react'
import { specialityData } from '../assets/assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const ServicosMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='servico'>
        <h1 className='text-3xl font-medium'>Serviços Populares</h1>
        <p className='sm:w-1/3 text-center text-sm'>Esses são os serviços mais procurados em nossa plataforma.</p>
        <div className='flex sm:justify-center gap-8 pt-5 w-full overflow-scroll'>
            {specialityData.map((item, index) => (
                <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/barbeiros/${item.speciality}`}>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ServicosMenu