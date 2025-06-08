import React, { useState } from "react";
import { FaBars, FaTimes, FaHeart, FaDollarSign } from "react-icons/fa";

// Importar imágenes desde la carpeta assets/mainmenu
import searchIcon from "../assets/mainmenu/search.png";
import userIcon from "../assets/mainmenu/user.png";
import logoHeader from "../assets/mainmenu/logoHeader.png";
import musicIcon from "../assets/mainmenu/Programacion.png";
import infoIcon from "../assets/mainmenu/Informacion.png";
import broadcastIcon from "../assets/mainmenu/Transmitimos desde.png";
import shoppingIcon from "../assets/mainmenu/Grupos de ventas.png";
import heartIcon from "../assets/mainmenu/Contenido para adultos.png";
import gameIcon from "../assets/mainmenu/Juegos.png";
import clothingIcon from "../assets/mainmenu/Indumentaria.png";
import messageIcon from "../assets/mainmenu/MSJ.png";
import donateIcon from "../assets/mainmenu/Donar.webp";
import giveawaysIcon from "../assets/mainmenu/giveaways.png";
import adoptionIcon from "../assets/mainmenu/Donaciones y adopciones.png";
import helpIcon from "../assets/mainmenu/Te agrada nuestro sitio web.png";

// Importar componente de la ventana emergente
import GrupoDeVentas from "./GrupoDeVentas"; // Asegúrate de que la ruta sea correcta

const HeaderMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);
  const [salesModalOpen, setSalesModalOpen] = useState(false); // Estado para la ventana emergente

  return (
    <div className="bg-black w-full text-white relative">
      {/* Header */}
      <header className="bg-gray-800 text-white flex justify-between items-center p-4 w-full relative">
        {/* Botón de menú */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#f7981e] text-4xl">
          <FaBars />
        </button>

        {/* Imagen del logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logoHeader} alt="Music Hub Logo" className="w-24 md:w-40 lg:w-48 object-contain" />
        </div>

        <div className="flex gap-6"> 
          {/* Ícono de búsqueda */}
          <div className="relative cursor-pointer">
            <img
              src={searchIcon}
              alt="Buscar"
              className="w-8 h-8 object-contain hover:scale-110 transition-transform"
              onClick={() => setSearchMenuOpen(!searchMenuOpen)}
            />
            {searchMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-900 shadow-lg rounded-lg overflow-hidden z-50 border border-gray-700">
                <div className="bg-[#f7981e] text-black text-center font-bold py-2">Lo más buscado</div>
                <ul className="text-white">
                  <SearchItem text="Juegos" imgSrc={gameIcon} />
                  <SearchItem text="MSJ" imgSrc={messageIcon} />
                  <SearchItem text="Indumentaria" imgSrc={clothingIcon} />
                  <SearchItem text="Donar" imgSrc={donateIcon} />
                </ul>
              </div>
            )}
          </div>
          
          {/* Ícono de usuario */}
          <img
            src={userIcon}
            alt="Usuario"
            className="w-8 h-8 object-contain cursor-pointer hover:scale-110 transition-transform"
          />
        </div>
      </header>

      {/* Fondo Oscuro cuando el Menú está Abierto */}
      {menuOpen && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>}

      {/* Menú Lateral */}
      <aside className={`fixed top-0 left-0 w-80 h-full bg-black flex flex-col justify-between transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 bg-gray-900">
          <h2 className="text-3xl font-bold text-[#f7981e]">MENÚ</h2>
          <button onClick={() => setMenuOpen(false)} className="text-[#f7981e] text-2xl">
            <FaTimes />
          </button>
        </div>

        {/* Opciones del menú */}
        <nav className="flex-grow overflow-y-auto">
          <ul className="space-y-2">
            <MenuItem text="Programación" imgSrc={musicIcon} onClick={() => setMenuOpen(false)} />
            <MenuItem text="Información" imgSrc={infoIcon} onClick={() => setMenuOpen(false)} />
            <MenuItem text="Transmitimos desde" imgSrc={broadcastIcon} onClick={() => setMenuOpen(false)} />
            <MenuItem text="Grupos de ventas" imgSrc={shoppingIcon} onClick={() => { setSalesModalOpen(true); setMenuOpen(false); }} />
            <MenuItem text="Contenido para adultos" imgSrc={heartIcon} hasBadge onClick={() => setMenuOpen(false)} />
            <MenuItem text="Juegos" imgSrc={gameIcon} onClick={() => setMenuOpen(false)} />
            <MenuItem text="Indumentaria" imgSrc={clothingIcon} onClick={() => setMenuOpen(false)} />
            <MenuItem text="MSJ" imgSrc={messageIcon} hasBadge onClick={() => setMenuOpen(false)} />
            <MenuItem text="Donar" imgSrc={donateIcon} hasHeart onClick={() => setMenuOpen(false)} />
            <MenuItem text="Concursos y Sorteos" imgSrc={giveawaysIcon} onClick={() => setMenuOpen(false)} />
            <MenuItem text="Donaciones y adopciones" imgSrc={adoptionIcon} hasHeart onClick={() => setMenuOpen(false)} />
            <MenuItem text="¿Te agrada nuestro sitio web?" imgSrc={helpIcon} onClick={() => setMenuOpen(false)} />
          </ul>
        </nav>
      </aside>

      {/* Ventana emergente para Grupos de Ventas */}
      <GrupoDeVentas isOpen={salesModalOpen} onClose={() => setSalesModalOpen(false)} />
    </div>
  );
};

const MenuItem = ({ text, imgSrc, hasBadge, hasHeart, onClick }) => {
  return (
    <li 
      className="flex justify-between items-center px-4 py-3 cursor-pointer bg-black hover:bg-[#f7981e] hover:text-black transition-all duration-300" 
      onClick={onClick}
    >
      <div className="flex items-center gap-x-4">
        <img src={imgSrc} alt={text} className="w-8 h-8 object-contain" />
        <span className="font-medium">{text}</span>
      </div>
      <div className="flex items-center gap-4">
        {hasBadge && (
          <div className="bg-[#f7981e] text-white w-8 h-8 flex items-center justify-center">
            <FaDollarSign className="text-white text-lg" />
          </div>
        )}
        {hasHeart && (
          <div className="bg-[#f7981e] text-white w-8 h-8 flex items-center justify-center">
            <FaHeart className="text-white text-lg" />
          </div>
        )}
      </div>
    </li>
  );
};

const SearchItem = ({ text, imgSrc }) => {
  return (
    <li className="px-4 py-2 flex items-center gap-5 hover:bg-[#f7981e] hover:text-black transition-all duration-300 cursor-pointer">
      <img src={imgSrc} alt={text} className="w-6 h-6 object-contain" />
      {text}
    </li>
  );
};

export default HeaderMenu;
