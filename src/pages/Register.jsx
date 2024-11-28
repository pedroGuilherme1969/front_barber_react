/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatCPF } from '../utils/utils';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpf: '',
    barber: false, 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCpfChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      cpf: formatCPF(e.target.value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log(formData)

    try {
      const response = await fetch('http://localhost:8080/user/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {        
        const errorData = await response.json(); // Captura a mensagem de erro
        throw new Error(errorData.error);
    }

      const data = await response.json();
      alert('Usuário registrado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao registrar:', error);
      alert(error);
    }
  
  };

  return (
    <div>
      <form className="min-h-[80vh] flex items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl font-semibold">Cadastrar</p>
          <p>Crie uma conta para realizar um agendamento.</p>
          <div className="w-full">
            <label htmlFor="cpf">CPF:</label> <br />
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              placeholder="Digite o seu CPF"
              onChange={handleCpfChange}
              maxLength={14}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">E-mail:</label> <br />
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Digite o seu e-mail."
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="firstName">Primeiro Nome:</label> <br />
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              placeholder="Digite o seu primeiro nome."
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName">Último Nome:</label> <br />
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              placeholder="Digite o seu último nome."
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="password">Senha:</label> <br />
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Digite a sua senha."
              onChange={handleChange}
            />
          </div>
        
          <button className="bg-gray-600 text-white w-full py-2 rounded-md text-base">Cadastrar</button>
          <p>
            Já tem uma conta?{' '}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => {
                navigate('/login');
              }}
            >
              Clique aqui.
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
