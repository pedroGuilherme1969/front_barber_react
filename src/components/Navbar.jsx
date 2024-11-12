/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets/assets_frontend/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-4 border-b-gray-400 relative z-30">
      <h1 onClick={() => navigate('/')} className="w-44 text-black text-4xl font-extrabold cursor-pointer">CorteJÁ</h1>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className='border-none outline-none h-0.5 bg-gray-500 m-auto hidden' />
        </NavLink>
        <NavLink to="/barbeiros">
          <li className="py-1">Barbeiros</li>
          <hr className='border-none outline-none h-0.5 bg-gray-500 m-auto hidden' />
        </NavLink>
        <NavLink to="/servicos">
          <li className="py-1">Serviços</li>
          <hr className='border-none outline-none h-0.5 bg-gray-500 m-auto hidden' />
        </NavLink>
        <NavLink to="/sobre">
          <li className="py-1">Sobre</li>
          <hr className='border-none outline-none h-0.5 bg-gray-500 m-auto hidden' />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer relative">
            <img
              className="w-8 rounded-full"
              src={assets.upload_icon}
              alt="Profile"
              onClick={() => setShowMenu(!showMenu)} // Alterna o menu ao clicar
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="Dropdown icon"
              onClick={() => setShowMenu(!showMenu)} // Alterna o menu ao clicar
            />
            {showMenu && (
              <div className="absolute top-12 right-0 text-base font-medium text-gray-600 z-40 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg">
                <p
                  onClick={() => {
                    navigate("/meu-perfil");
                    setShowMenu(false);
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Meu perfil
                </p>
                <p
                  onClick={() => {
                    navigate("/meus-agendamentos");
                    setShowMenu(false);
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Agendamentos
                </p>
                <p
                  onClick={() => {
                    setToken(false);
                    setShowMenu(false);
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Desconectar
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-gray-500 text-white px-8 py-3 rounded-full font-light md:block"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
