import React, { useState } from "react";
import GameContainer from "../components/GameContainer";
import SecondHomeSection from "../components/SecondHomeSection";

export const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  return (
    <div>
      {/* Muestra SecondHomeSection (la lista de juegos) solo si
        el estado 'selectedGame' es nulo.
      */}
      {!selectedGame && <SecondHomeSection setSelectedGame={setSelectedGame} />}

      {/* Muestra GameContainer (la vista detallada del juego) solo si
        el estado 'selectedGame' contiene un objeto de juego.
      */}
      {selectedGame && (
        <GameContainer
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </div>
  );
};
