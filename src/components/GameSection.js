import React from "react";
import GameCard from "./GameCard";

import gameIcon from "../assets/mainmenu/Juegos.png";

// Importar imágenes de juegos
import TheTriptrix from "../assets/banners/Banner_The_Triptrix.png";
import FutureGame1 from "../assets/banners/FutureGame1.png";  // Imagen real del juego futuro
import FutureGame2 from "../assets/banners/FutureGame2.png";  // Imagen real del juego futuro

const GameSection = ({ setSelectedGame }) => {
  const games = [
    {
      title: "THE TRIPTRIX",
      description: "Acompaña a Pepe Frog en su viaje de LSD, una aventura friki...",
      rating: 4.6,
      image: TheTriptrix,
      url: "/Build_The_Triptrix_1.0/index.html",
      width: 768,
      height: 1366,
      locked: false, // ✅ Este juego está disponible
    },
    {
      title: "SPACE TRIP - The Smoking Game",
      description: "Próximamente...",
      rating: 0, // No tiene calificación aún
      image: FutureGame1,  // Imagen real del juego futuro
      url: "#", // No es jugable
      width: 0,
      height: 0,
      locked: true, // 🔒 Bloqueado
    },
    {
      title: "HARRY POPPER",
      description: "Próximamente...",
      rating: 0, // No tiene calificación aún
      image: FutureGame2,  // Imagen real del juego futuro
      url: "#", // No es jugable
      width: 0,
      height: 0,
      locked: true, // 🔒 Bloqueado
    },
  ];

  return (
  <section id="gameSection" className="w-full max-w-6xl p-6 bg-gray-900 rounded-lg shadow-lg">
    <div className="flex justify-center items-center mb-6">
      <img src={gameIcon} alt="Game Icon" className="w-16 h-16 object-contain mr-3" /> {/* 📌 Ajusta el tamaño aquí */}
      <h2 className="text-5xl font-bold text-yellow-500 text-center">JUEGOS</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game, index) => (
        <GameCard key={index} {...game} onClick={!game.locked ? () => setSelectedGame(game) : null} />
      ))}
    </div>
  </section>

  );
};

export default GameSection;
