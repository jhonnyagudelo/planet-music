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
import cabezaVolteada from "../assets/menu/cabeza-violeta.png";
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
      <section class="grid grid-cols-5 p-2 border-b-2 border-red-700">
        <div class="flex p-2 justify-center">
          <img
            class="bg-center"
            src={planetMusic}
            alt="alien"
            width="60"
            height="50"
          />
        </div>
        <div class="flex p-2 justify-center">
          <img src={msj} alt="alien" width="80" height="50" />
        </div>
        <div class="flex p-2 justify-center">
          <img src={ojoGif} alt="alien" width="80" height="50" />
        </div>

        <div class="flex p-2 justify-center">
          <img
            class="m-1"
            src={carritoCompra}
            alt="alien"
            width="80"
            height="50"
          />
        </div>
        <div class="flex p-2 justify-center">
          <img class="m-1" src={pa} alt="alien" width="60" height="50" />
        </div>
      </section>
      <section class="grid grid-rows-1 grid-cols-8 grid-flow-row-dense p-2">
        <div class="col-span-2 flex items-center flex-col justify-between">
          <div class="flex items-start">
            <img src={live} alt="live" width="120" height="50" />
            <img src={caminando} alt="live" width="120" height="50" />
          </div>
          <div>
            <img
              class="w-20"
              src={comegalleta}
              alt=""
              width="120"
              height="50"
            />
          </div>
          <div>
            <img class="w-20" src={ia} alt="" width="120" height="50" />
          </div>
          <div>
            <img class="w-20" src={pato} alt="" width="120" height="50" />
          </div>
          <div>
            <img class="w-20" src={bersNeon} alt="" width="140" height="50" />
          </div>
          <div>
            <img
              src={misionEliptica}
              alt="mision eliptica"
              width="300"
              height="50"
            />
            <p class="text-white text-xs">The best sessions of the 2000's</p>
          </div>
          <div>
            <img src={sonidoHq} alt="" width="200" height="80" />
          </div>
        </div>

        <div class="col-span-4 flex justify-center items-center max-w-4xl">
          <img src={cabezaVolteada} alt="Imagen grande" />
        </div>

        <div class="col-span-2 flex items-center flex-col justify-between">
          <div class="">
            <img src={weedStore} alt="alien2" width="120" height="50" />
            <img src={adsProhibido} alt="alien2" width="120" height="50" />
          </div>
          <div class="">
            <img src={blackFriday} alt="ayuda" width="140" height="50" />
          </div>

          <div class="">
            <img src={ojoDinero} alt="ayuda" width="140" height="50" />
          </div>

          <div class="">
            <img src={kleenex} alt="ayuda" width="140" height="50" />
          </div>
          <div class="">
            <img src={grandAuto} alt="ayuda" width="140" height="50" />
          </div>
          <div class="">
            <img src={radar} alt="ayuda" width="140" height="50" />
            <img src={numero} alt="ayuda" width="140" height="50" />
          </div>
        </div>
      </section>
      <section class="m-3">
        <article>
          <p class="text-red-700 text-center p-5 text-2xl font-bold">
            Heavy Metal, Bachata, Merengue, Vallenato, Ranchera, Salsa, Cumbia,
            Dembow, Baladas, Kpop, Música Popular, Trap, Banda, Champeta, Pop,
            Rock, Hip Hop, Reggaetón, Electrónica, R&B, Música Clásica, Country,
            BSOs, Reggae, Carranga, Mariachi, Tecno Carrilera, Salsa Choke,
            Tango, Bolero, Música de Planchar, Disco, Funk..
          </p>
        </article>
        <article class="">
          <div class="relative bottom-0 top-4 left-0 right-0 flex justify-center items-center p-2">
            <img src={rejaRoja} alt="malla roja" class="w-full" />
            <div class="absolute top-0  left-0 right-0 bottom-36 flex justify-around items-center">
              <img src={tvSimpsons} alt="tv-simpson" width={250} />
              <img
                src={jesusBailando}
                alt="jesus-bailando"
                width={250}
                class="ml-4 mr-4"
              />
              <div class="flex flex-wrap justify-center items-center z-10">
                <img src={bebe} alt="bebe" width={350} />
                <img
                  src={torreSeñal}
                  alt="torre-señal"
                  width={100}
                  height={50}
                />
              </div>
              <div class="absolute bottom-0 left-1/4 right-0 m-auto  ">
                <div class="flex flex-col justify-center items-center">
                  <img src={arcoiris} alt="arcoiris" width={350} />
                  <img src={simio} alt="" width={80} />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default HomePrincipal;
