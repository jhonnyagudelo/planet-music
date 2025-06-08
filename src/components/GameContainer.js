import React from "react";


const GameContainer = ({ game, onClose }) => {
  if (!game) return null;

  // Tamaño de la pantalla
  const screenWidth = window.innerWidth * 0.9; // 90% del ancho de la pantalla
  const screenHeight = window.innerHeight * 0.9; // 90% del alto de la pantalla

  // Calcula la escala para que el juego encaje dentro del contenedor sin cortar
  const scaleX = screenWidth / game.width;
  const scaleY = screenHeight / game.height;
  let scale = Math.min(scaleX, scaleY); // Mantiene la proporción

  // Reducimos un poco más la escala para dejar margen
  scale *= 0.90;

  // Tamaño final del iframe basado en su escala
  const iframeWidth = game.width;
  const iframeHeight = game.height;
  const scaledWidth = iframeWidth * scale;
  const scaledHeight = iframeHeight * scale;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      {/* Contenedor principal con más margen */}
      <div
        className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center relative"
        style={{
          width: scaledWidth + 80, // Más margen
          height: scaledHeight + 120, // Más espacio para el botón
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          padding: "40px", // Mayor separación interna
        }}
      >
        {/* Título del juego */}
        <h2 className="text-2xl font-bold text-yellow-500 mb-2">{game.title}</h2>

        {/* Contenedor del juego con más margen */}
        <div className="relative" style={{ width: scaledWidth, height: scaledHeight }}>
          <iframe
            src={game.url}
            className="border-4 border-yellow-500 rounded-lg"
            style={{
              width: iframeWidth,
              height: iframeHeight,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              display: "block",
            }}
            title={game.title}
          ></iframe>
        </div>

        {/* Botón de cerrar - ahora con más espacio y centrado */}
        <button
          onClick={onClose}
          className="mt-6 bg-red-600 px-6 py-2 rounded text-white text-lg hover:bg-red-700 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default GameContainer;
