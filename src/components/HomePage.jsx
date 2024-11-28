import { useEffect } from "react";
import { assets } from "../assets/assets/assets_frontend/assets";

const HomePage = () => {
    return (
        
        <div className="relative w-full h-screen">
        <div
            className="absolute inset-0 bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${assets.header_img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>        
        </div>
        <div className='flex items-center justify-between text-sm py-4 mb-4 border-b-gray-400'>
            <h1 className='w-44 text-white text-4xl font-extrabold'>CorteJÁ</h1>
        </div>    
        <section className="absolute inset-0 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center text-white px-4 rounded-xl">
            <h2 className="text-5xl font-bold mb-4">Corte JÁ</h2>
            <p className="text-2xl mb-8">Encontre os melhores profissionais de beleza e bem-estar perto de você</p>

            <div className="search-container relative w-full max-w-md">
                <div className="search-bar flex items-center bg-white rounded-full shadow-md overflow-hidden">
                    <i className="fa-solid fa-magnifying-glass text-gray-400 pl-4"></i>
                    <input
                    type="text"
                    id="searchInput"
                    placeholder="Pesquise serviços ou empresas"
                    className="w-full p-4 pl-12 rounded-full text-gray-800 outline-none"
                    />
                </div>

          </div>
        </section>
      </div>
    );
  };
  
  export default HomePage;
  