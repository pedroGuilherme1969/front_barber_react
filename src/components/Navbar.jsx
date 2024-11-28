/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets/assets_frontend/assets";
import { API } from "../api";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);

  const checkAuthToken = () => {
    const authToken = localStorage.getItem("authToken");
    setToken(!!authToken); // Se authToken existir, será true, senão false
  };

  useEffect(() => {
    checkAuthToken();
    const handleStorageChange = () => checkAuthToken();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const [userData, setUserData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpf: "",
    barber: false,
    code: "",
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const cpf = localStorage.getItem("cpf"); // Obtém o CPF do localStorage
        if (!cpf) {
          console.error("CPF não encontrado no localStorage.");
          return;
        }

        const response = await API.get(`/user/data/${cpf}`); // Chama a API
        setUserData(response.data); // Popula o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    };

    getUserData();
  }, []);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-4 border-b-gray-400 relative z-30">
      <h1
        onClick={() => navigate("/")}
        className="w-44 text-black text-4xl font-extrabold cursor-pointer"
      >
        CorteJÁ
      </h1>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
        </NavLink>
        <NavLink to="/barbeiros">
          <li className="py-1">Barbeiros</li>
        </NavLink>
        <NavLink to="/servicos">
          <li className="py-1">Serviços</li>
        </NavLink>
        <NavLink to="/sobre">
          <li className="py-1">Sobre</li>
        </NavLink>

        
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer relative">
            
            <span> 
          {token && userData.firstName && userData.lastName ? (
            <>
              <nametag>{userData.firstName + " " + userData.lastName}</nametag> <br />  
              <codetag>{userData.code}</codetag>
            </> 
          ) : (
            <p></p>
          )}
        </span>

            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="Dropdown icon"
              onClick={() => setShowMenu(!showMenu)}
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
