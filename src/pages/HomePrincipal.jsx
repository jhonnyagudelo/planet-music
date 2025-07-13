import React from "react";
import planetMusic from "../assets/menu/planetMusic2.png";
import ia from "../assets/menu/iconIa.png";
import carritoCompra from "../assets/menu/carrito-compra.gif";
import msj from "../assets/menu/msj2.png";
import ojoGif from "../assets/menu/ojo-central.gif";
import live from "../assets/menu/live.png";
import comegalleta from "../assets/menu/comeGalletas.gif";
import misionEliptica from "../assets/menu/misionEliptica.png";
import sonidoHq from "../assets/menu/sonido-hq.jpg";
import cabezaVolteada from "../assets/menu/nuevo-fondo.gif";
import caminando from "../assets/menu/caminando.png";
import adsProhibido from "../assets/menu/ads-prohibido.png";
import weedStore from "../assets/menu/weed-store.png";
import pa from "../assets/menu/pa.gif";
import pato from "../assets/menu/pato-prohibido.png";
import bersNeon from "../assets/menu/bers-neon.png";
import blackFriday from "../assets/menu/blackFriDay.png";
import ojoDinero from "../assets/menu/ojo-dinero.gif";
import kleenex from "../assets/menu/kleenex.png";
import grandAuto from "../assets/menu/grand-auto.png";
import numero from "../assets/menu/11-11.png";
import radar from "../assets/menu/radar.png";
import rejaRoja from "../assets/menu/rejaRoja.png";
import tvSimpsons from "../assets/menu/tvSimpson.gif";
import jesusBailando from "../assets/menu/jesus-bailando.gif";
import bebe from "../assets/menu/bebe-mirando.gif";
import arcoiris from "../assets/menu/arcoiris.gif";
import simio from "../assets/menu/simio.png";
import torreSeñal from "../assets/menu/torreSeñal.gif";

const HomePrincipal = () => {
  return (
    <section>
      <section class="grid grid-cols-1 md:grid-cols-6 gap-2 p-2 items-center">
        <div class="col-span-1 flex flex-wrap justify-center items-center gap-2 md:flex-col md:justify-between md:gap-4">
          <img src={live} alt="live" class="w-16 h-auto md:w-24" />
          <img src={caminando} alt="caminando" class="w-16 h-auto md:w-24" />
          <img
            src={comegalleta}
            alt="comegalleta"
            class="w-16 h-auto md:w-24"
          />
          <img src={ia} alt="ia" class="w-16 h-auto md:w-24" />
          <img src={pato} alt="pato" class="w-16 h-auto md:w-24" />
          <img src={bersNeon} alt="bersNeon" class="w-20 h-auto md:w-28" />
          <div class="flex flex-col items-center">
            <img
              src={misionEliptica}
              alt="mision eliptica"
              class="w-32 h-auto md:w-48"
            />
            <p class="text-white text-xs text-center mt-1">
              The best sessions of the 2000's
            </p>
          </div>
          <img src={sonidoHq} alt="sonido HQ" class="w-24 h-auto md:w-36" />
        </div>

        <div class="col-span-1 md:col-span-4 flex justify-center items-center p-4">
          <img
            src={cabezaVolteada}
            alt="Imagen grande"
            class="max-w-full h-auto object-contain"
          />
        </div>

        <div class="col-span-1 flex flex-wrap justify-center items-center gap-2 md:flex-col md:justify-between md:gap-4">
          <img src={weedStore} alt="weed store" class="w-16 h-auto md:w-24" />
          <img
            src={adsProhibido}
            alt="ads prohibido"
            class="w-16 h-auto md:w-24"
          />
          <img
            src={blackFriday}
            alt="black friday"
            class="w-20 h-auto md:w-28"
          />
          <img src={ojoDinero} alt="ojo dinero" class="w-20 h-auto md:w-28" />
          <img src={kleenex} alt="kleenex" class="w-20 h-auto md:w-28" />
          <img src={grandAuto} alt="grand auto" class="w-20 h-auto md:w-28" />
          <img src={radar} alt="radar" class="w-20 h-auto md:w-28" />
          <img src={numero} alt="numero" class="w-20 h-auto md:w-28" />
        </div>
      </section>
      <section class="p-3">
        <article>
          <p class="text-red-700 text-center p-5 text-xl sm:text-2xl font-bold">
            Heavy Metal, Bachata, Merengue, Vallenato, Ranchera, Salsa, Cumbia,
            Dembow, Baladas, Kpop, Música Popular, Trap, Banda, Champeta, Pop,
            Rock, Hip Hop, Reggaetón, Electrónica, R&B, Música Clásica, Country,
            BSOs, Reggae, Carranga, Mariachi, Tecno Carrilera, Salsa Choke,
            Tango, Bolero, Música de Planchar, Disco, Funk..
          </p>
        </article>

        <article class="relative w-full max-w-7xl mx-auto ">
          <img
            src={rejaRoja}
            alt="malla roja"
            class="w-full h-auto object-cover"
          />

          <div class="absolute inset-0 flex flex-col items-center justify-end md:flex-row md:justify-around md:items-end p-2">
            <img
              src={tvSimpsons}
              alt="tv-simpson"
              class="w-16 sm:w-24 md:w-48 lg:w-64 mb-2 md:mb-0"
            />

            <img
              src={jesusBailando}
              alt="jesus-bailando"
              class="w-16 sm:w-24 md:w-48 lg:w-64 mb-2 md:mb-0"
            />

            <div class="relative w-16 sm:w-24 md:w-48 lg:w-64 flex flex-col items-center mb-2 md:mb-0">
              <img src={bebe} alt="bebe" class="w-full h-auto" />
              <img
                src={torreSeñal}
                alt="torre-señal"
                class="absolute bottom-0 right-0 w-8 h-auto sm:w-12 md:w-1/3 lg:w-1/4"
              />
            </div>
          </div>

          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img src={arcoiris} alt="arcoiris" class="w-full h-auto" />
            <img
              src={simio}
              alt="simio"
              class="w-12 h-auto -mt-4 sm:w-16 sm:-mt-6 md:w-20 md:-mt-8 lg:w-24 lg:-mt-10"
            />
          </div>
        </article>
      </section>
    </section>
  );
};

export default HomePrincipal;
