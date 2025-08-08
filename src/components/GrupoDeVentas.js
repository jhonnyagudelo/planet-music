import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

// Importación de imágenes de banderas y WhatsApp
import jamaicaFlag from "../assets/flags/jamaica.png";
import uruguayFlag from "../assets/flags/uruguay.png";
import mexicoFlag from "../assets/flags/mexico.png";
import idFlag from "../assets/flags/id.png";
import EEUUFlag from "../assets/flags/EEUU.png";
import australiaFlag from "../assets/flags/australia.png";
import reinounidoFlag from "../assets/flags/reinounido.png";
import afFlag from "../assets/flags/af.png";
import italiaFlag from "../assets/flags/italia.png";
import espanaFlag from "../assets/flags/espana.png";
import panamaFlag from "../assets/flags/panama.png";
import indiaFlag from "../assets/flags/india.png";
import chileFlag from "../assets/flags/chile.png";
import rusiaFlag from "../assets/flags/rusia.png";
import af2Flag from "../assets/flags/af2.png";
import dxbFlag from "../assets/flags/dxb.png";
import canadaFlag from "../assets/flags/canada.png";
import argentinaFlag from "../assets/flags/argentina.png";
import turquiaFlag from "../assets/flags/turquia.png";
import brazilFlag from "../assets/flags/brazil.png";
import japonFlag from "../assets/flags/japon.png";
import puertoricoFlag from "../assets/flags/puertorico.png";
import phFlag from "../assets/flags/ph.png";
import rdFlag from "../assets/flags/rd.png";
import bdFlag from "../assets/flags/bd.png";
import deFlag from "../assets/flags/de.png";
import byFlag from "../assets/flags/by.png";
import israelFlag from "../assets/flags/israel.png";
import ucraniaFlag from "../assets/flags/ucrania.png";
import egiptoFlag from "../assets/flags/egiptotalia.png";
import crFlag from "../assets/flags/cr.png";
import pakistanFlag from "../assets/flags/pakistan.png";
import sgFlag from "../assets/flags/sg.png";
import coreadelsurFlag from "../assets/flags/coreadelsur.png";
import bsFlag from "../assets/flags/bs.png";
import greciaFlag from "../assets/flags/grecia.png";
import suizaFlag from "../assets/flags/suiza.png";
import taiwanFlag from "../assets/flags/taiwan.png";
import vietnamFlag from "../assets/flags/vietnam.png";
import colombiaFlag from "../assets/flags/colombia.png";
import whatsappIcon from "../assets/icons/whatsapp.png";

// Lista de países con sus respectivas banderas
const countries = [
  { code: "JM", name: "JM", flag: jamaicaFlag },
  { code: "UY", name: "UY", flag: uruguayFlag },
  { code: "MX", name: "MX", flag: mexicoFlag },
  { code: "ID", name: "ID", flag: idFlag },
  { code: "AU", name: "AU", flag: australiaFlag },
  { code: "EE.UU", name: "EE.UU", flag: EEUUFlag },
  { code: "LDN", name: "LDN", flag: reinounidoFlag },
  { code: "AF", name: "AF", flag: afFlag },
  { code: "IT", name: "IT", flag: italiaFlag },
  { code: "ES", name: "ES", flag: espanaFlag },
  { code: "PA", name: "PA", flag: panamaFlag },
  { code: "IN", name: "IN", flag: indiaFlag },
  { code: "CL", name: "CL", flag: chileFlag },
  { code: "RU", name: "RU", flag: rusiaFlag },
  { code: "AF", name: "AF", flag: af2Flag },
  { code: "DXB", name: "DXB", flag: dxbFlag },
  { code: "CA", name: "CA", flag: canadaFlag },
  { code: "ARG", name: "ARG", flag: argentinaFlag },
  { code: "TR", name: "TR", flag: turquiaFlag },
  { code: "BR", name: "BR", flag: brazilFlag },
  { code: "JP", name: "JP", flag: japonFlag },
  { code: "PR", name: "PR", flag: puertoricoFlag },
  { code: "PH", name: "PH", flag: phFlag },
  { code: "RD", name: "RD", flag: rdFlag },
  { code: "BD", name: "BD", flag: bdFlag },
  { code: "DE", name: "DE", flag: deFlag },
  { code: "BY", name: "BY", flag: byFlag },
  { code: "IL", name: "IL", flag: israelFlag },
  { code: "UA", name: "UA", flag: ucraniaFlag },
  { code: "EG", name: "EG", flag: egiptoFlag },
  { code: "CR", name: "CR", flag: crFlag },
  { code: "PK", name: "PK", flag: pakistanFlag },
  { code: "SG", name: "SG", flag: sgFlag },
  { code: "KR", name: "KR", flag: coreadelsurFlag },
  { code: "BS", name: "BS", flag: bsFlag },
  { code: "GR", name: "GR", flag: greciaFlag },
  { code: "CH", name: "CH", flag: suizaFlag },
  { code: "TW", name: "TW", flag: taiwanFlag },
  { code: "VN", name: "VN", flag: vietnamFlag },
  { code: "CO", name: "CO", flag: colombiaFlag, isCurrent: true },
];

const GrupoDeVentas = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Evita renderizar si isOpen es false

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-gray-800 rounded-lg p-3 w-[500px] max-h-[700px] overflow-auto shadow-lg">
        {/* Botón de cierre separado */}
        <button
          onClick={onClose}
          className="absolute top-2 right-0 pr-6 text-[#f7981e] hover:text-[#f7981e] text-2xl font-extrabold transition-colors focus:outline-none"
        >
          ✕
        </button>

        {/* Espacio antes de la lista de países */}
        <div className="mt-10"></div>

        {/* Lista de países */}
        <div className="grid grid-cols-5 gap-2">
          {countries.map((country) => (
            <div key={country.code} className="flex flex-col items-center">
              <img
                src={country.flag}
                alt={country.name}
                className="w-8 h-8 rounded-full border border-[#f7981e]"
              />
              <span className="mt-1 text-xs font-medium text-[#f7981e]">
                {country.name}
              </span>
              {country.isCurrent && (
                <div className="flex items-center text-green-600 mt-1">
                  <FaMapMarkerAlt className="text-xs" />
                  <span className="ml-1 text-xs">Actual</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Botón de ingreso a WhatsApp */}
        <div className="flex justify-center items-center mt-4">
          <a
            href="https://chat.whatsapp.com/GJWkYBtqpsEIV9mHeHs91L"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#f7981e] text-lg font-bold px-3 py-1 rounded-lg hover:underline transition duration-200"
          >
            INGRESAR
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GrupoDeVentas;

