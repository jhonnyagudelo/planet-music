import nequi from "../assets/menu/nequi.png";
export const Nequi = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Evita renderizar si isOpen es false
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative rounded-lg w-[500px] max-h-[700px] overflow-auto">
        <article className="relative">
          {/* Imagen */}
          <div className="p-3 flex justify-center cursor-pointer relative">
            <img src={nequi} alt="imagen-contribuye" className="rounded-lg" />
            {/* Botón de cierre */}
            <button
              onClick={onClose}
              className="absolute top-4 right-9 w-10 h-10 flex items-center justify-center text-[#D80381] hover:bg-opacity-100 hover:scale-105 transition-all text-4xl font-extrabold leading-none focus:outline-none"
              aria-label="Cerrar"
            >
              &times;
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
