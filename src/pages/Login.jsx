/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { formatCPF } from '../utils/utils';

const Login = () => {
  const navigate = useNavigate();

  const [cpf, setCpf] = useState('')

    const handleCpfChange = (e) =>{
        setCpf(formatCPF(e.target.value))
    }

  return (
    <div>
      <form className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>Login</p>
          <p>Entre em sua conta para realizar um agendamento.</p>
          <div className='w-full '>
            <label htmlFor="cpf">CPF:</label> <br />
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" id='cpf' name='cpf' value={cpf} placeholder="Digite o seu CPF." onChange={handleCpfChange} maxLength={14}/>
          </div>
          <div className='w-full '>
            <label htmlFor='email'>E-mail:</label> <br />
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" id='email' name='email' placeholder="Digite o seu e-mail."/>
          </div>
          <div className='w-full '>
            <label htmlFor='password'>Senha:</label> <br />
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" id='password' name='password' placeholder="Digite a sua senha."/>
          </div>
          <button className='bg-gray-600 text-white w-full py-2 rounded-md text-base'>Entrar</button>
          <p>Ainda não tem uma conta? <span className='text-primary underline cursor-pointer' onClick={() =>{navigate("/registrar")}}>Clique aqui.</span></p>
        </div>

      </form>
    </div>
  )
}

export default Login