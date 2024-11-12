/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets/assets_frontend/assets'

const Appointment = () => {
  const {barberId} = useParams()
  const {barbers} = useContext(AppContext)
  const daysOfWeek = ['Terça', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sábado']

  const [barberInfo, setBarberInfo] = useState(null)
  const [barberSlots, setBarberSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchBarberInfo = async () => {
    const barberInfo = barbers.find(barb => barb._id === barberId)
    setBarberInfo(barberInfo)
  }

  const getAvailabeSlots = async () => {
    setBarberSlots([])

    let today = new Date()

    for(let i = 0; i < 5; i++){
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime) {
        let formarttedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formarttedTime
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)

      }
      setBarberSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchBarberInfo()
  },[barbers, barberId])

  useEffect(() => {
    getAvailabeSlots()
  },[barberInfo])

  useEffect(() =>{

  }, [barberSlots])

  return barberInfo &&  (
    <div>

      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-gray-600 w-full sm:max-w-72 rounded-lg' src={barberInfo.image} alt="" />
          
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 pt-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {barberInfo.name} 
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>Tempo de Experiência - {barberInfo.experience}</p>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>Sobre <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{barberInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Valor de agendamento: R$<span className='text-gray-600'>{barberInfo.fees}</span>
          </p>
        </div>
      </div>

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Horários Disponíveis: </p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            barberSlots.length && barberSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-gray-600 text-white': 'border border-gray-900'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {barberSlots.length && barberSlots[slotIndex].map((item, index) => (
            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-gray-600 text-white' : 'text-gray-950 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className='bg-gray-600 text-white text-sm font-light px-14 py-3 rounded-full my-6'>Realizar Agendamento</button>
      </div>

    </div>
  )
}

export default Appointment
