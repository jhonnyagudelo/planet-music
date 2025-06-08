import React from "react";
import GameSection from "../components/GameSection";

const SecondHomeSection = ({ setSelectedGame }) => {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center py-4"> 
      <img src="/assets/images/pauta-en-vivo.png" alt="Pauta en Vivo" className="w-[500px] md:w-[700px] lg:w-[900px] mb-4" /> 
      
      {/* Iconos más ajustados */}
      <div className="flex justify-center gap-4 mb-4"> 
        <img src="/assets/icons/icon1.png" alt="Icono 1" className="w-14 md:w-16 lg:w-18" />
        <img src="/assets/icons/icon2.png" alt="Icono 2" className="w-14 md:w-16 lg:w-18" />
        <img src="/assets/icons/icon3.png" alt="Icono 3" className="w-14 md:w-16 lg:w-18" />
        <img src="/assets/icons/icon4.png" alt="Icono 4" className="w-14 md:w-16 lg:w-18" />
      </div>
      
      <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl w-[90%] md:w-[70%] lg:w-[60%] max-w-4xl mx-auto px-6 mb-8 leading-relaxed">
        Por favor, proporciona la información de tu emprendimiento: nombre, breve descripción, ubicación 
        (país, ciudad), números de contacto (fijo o celular y WhatsApp), correo electrónico y redes sociales. 
        Al pagar <strong>$4.60 USD</strong>, tu anuncio se publicará en vivo. El anuncio se escuchará durante la 
        transmisión en vivo y se difundirá a nivel mundial.
      </p>

      {/* Botón pautar con menos margen */}
      <h2 className="text-red-600 text-5xl font-bold underline cursor-pointer mb-6">PAUTAR</h2>
      
      {/* Sección de juegos */}
      <GameSection setSelectedGame={setSelectedGame} />

      {/* Imagen publicitaria logo alineados horizontalmente */}
      <div className="flex items-center justify-center mt-4 gap-2 w-full">
        <img 
          src="/assets/images/monster-logo.png" 
          alt="Monster png" 
          className="w-full max-w-[600px] h-auto" 
        />
      </div>

    </section>
  );
};

export default SecondHomeSection;
