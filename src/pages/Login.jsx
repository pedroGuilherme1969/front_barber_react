import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../api';

function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    try {
      const response = await API.post('/user/login', {
        cpfCnpj: cpf,
        password: password,
      });
  
      localStorage.setItem('cpf', cpf);

      if (response.status === 200) {
        console.log('Login bem-sucedido:', response.data);

        localStorage.setItem('authToken', true);
        localStorage.setItem('cpf', cpf);
        console.log(cpf)
  
        navigate('/');
        window.location.reload();

      }
    } catch (err) {
      console.error('Erro ao realizar login:', err.response?.data || err.message);
      alert('Login falhou! Verifique seus dados.');
    }
    
  }
        

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg" onSubmit={handleSubmit}>
        <p className="text-2xl font-semibold">Login</p>
        <p>Entre em sua conta para realizar um agendamento.</p>

        <div className="w-full">
          <label htmlFor="cpf">CPF:</label>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            id="cpf"
            name="cpf"
            value={cpf}
            placeholder="Type your CPF..."
            onChange={handleCpfChange}
            maxLength={14}
          />
        </div>
        

        <div className="w-full">
          <label htmlFor="password">Senha:</label>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password..."
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit" className="bg-gray-600 text-white w-full py-2 rounded-md text-base">
          LogIn
        </button>

        


        <p>
          Você ainda não tem uma conta?
          <span
            className="text-primary underline cursor-pointer"
            onClick={() => navigate('/register')}
          >
            Clique aqui.
          </span>
        </p>
      </form>
    </div>
  );
}


export default Login;