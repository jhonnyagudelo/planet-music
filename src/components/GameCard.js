import React from "react";
import { FaLock } from "react-icons/fa"; // 📌 Icono de candado

const GameCard = ({ title, description, rating, image, width, height, onClick, locked }) => {
  return (
    <div
      className={`relative bg-gray-800 p-4 rounded-lg shadow-lg transition-transform ${
        locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:scale-105"
      }`}
      onClick={!locked ? () => onClick({ title, width, height }) : null} // 📌 Pasamos width y height
    >
      {/* Imagen del juego */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
        
        {/* 🔒 Superposición de candado si el juego está bloqueado */}
        {locked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
            <FaLock className="text-5xl text-gray-300" />
          </div>
        )}
      </div>

      {/* Título y descripción */}
      <h3 className="text-2xl font-bold text-yellow-500">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>

      {/* Mostrar calificación solo si el juego está disponible */}
      {!locked ? (
        <div className="flex items-center mt-2 text-yellow-500">
          {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
          <span className="text-gray-400 ml-2">{rating.toFixed(1)}</span>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-2 text-gray-400">
          <span>🔒 Juego bloqueado</span>
        </div>
      )}

      {/* Línea de crédito */}
      <p className="text-gray-400 text-xs mt-3 text-center">by Quantum - Desarrollo Web</p>
    </div>
  );
};

export default GameCard;
