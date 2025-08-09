import { useState } from "react";

import cabezaVolteada from "../assets/menu/nuevo-fondo.gif";
import play from "../assets/menu/play.png";
import monster from "../assets/menu/monster.png";
import contribuye from "../assets/menu/contribuye.gif";
import { Nequi } from "../components/Nequi";

const HomePrincipal = () => {
  const [salesModalOpen, setSalesModalOpen] = useState(false); // Estado para la ventana emergente
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
        <a
          href="https://wa.me/573246864647"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center mt-4">
            <p className="text-2xl md:text-4xl font-bold text-center text-blue-900 underline decoration-2 underline-offset-4 ">
              No tenemos redes sociales; solo usamos WhatsApp para comunicarnos.
              Si deseas contactarnos haga click aquí
            </p>
          </div>
        </a>

        <div
          className="p-3 flex justify-center cursor-pointer"
          onClick={(e) => {
            e.preventDefault(); // evita que recargue o navegue
            setSalesModalOpen(true); // abre el modal
          }}
        >
          <img src={contribuye} alt="imagen-contribuye" />
        </div>

        <article>
          <p className="text-center text-lg md:text-2xl">
            q.e.p.d. Alberto Lázaro del valle
          </p>
          <p className="text-center text-lg md:text-2xl">
            © 2023-2025 PLANET MUSIC ENTERTAINMENT. Todos los derechos
            reservados. "Tenga paciencia, mañana será un día mejor"
          </p>
        </article>
      </section>
      {/* Modal Nequi */}
      <Nequi isOpen={salesModalOpen} onClose={() => setSalesModalOpen(false)} />
    </section>
  );
};

export default HomePrincipal;
