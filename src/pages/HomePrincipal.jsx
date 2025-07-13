import React from "react";

import cabezaVolteada from "../assets/menu/nuevo-fondo.gif";
import play from "../assets/menu/play.png";
import monster from "../assets/menu/monster.png";
import contribuye from "../assets/menu/contribuye.gif";

const HomePrincipal = () => {
  return (
    <section>
      <section className="flex flex-col items-center p-2">
        <div className="flex justify-center mb-4">
          <img
            src={cabezaVolteada}
            alt="Imagen grande"
            className="max-w-full h-auto object-contain"
          />
        </div>

        <div className="flex justify-center">
          <img
            src={play}
            alt="btn-play"
            className="w-20 h-16 md:w-20 md:h-20 cursor-pointer"
          />
        </div>
      </section>

      <section className="">
        <div>
          <img src={monster} alt="imagen-monster-energy" />
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-2xl md:text-4xl font-bold text-center">
            No tenemos redes sociales; solo usamos WhatsApp para comunicarnos.
            Si deseas contactarnos haga click aqui
          </p>
        </div>
        <div class="p-3 flex justify-center cursor-pointer">
          <img src={contribuye} alt="imagen-contribuye" />
        </div>
      </section>
    </section>
  );
};

export default HomePrincipal;
