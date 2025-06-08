import React, { useState } from "react";
import SecondHomeSection from "../components/SecondHomeSection";
import GameContainer from "../components/GameContainer";
import HomePrincipal from "./HomePrincipal";

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    
    <>
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-0">
      <HomePrincipal/>


      
      {/* 📌 Sección de juegos */}
      <SecondHomeSection setSelectedGame={setSelectedGame} />

      {/* 📌 Contenedor del juego seleccionado */}
      {selectedGame && <GameContainer game={selectedGame} onClose={() => setSelectedGame(null)} />}
    </div>
    </>
  );
};

export default Home;
