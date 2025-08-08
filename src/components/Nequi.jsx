import nequi from "../assets/menu/nequi.png";
export const Nequi = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Evita renderizar si isOpen es false
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-gray-800 rounded-lg p-3 w-[500px] max-h-[700px] overflow-auto shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-0 pr-6 text-[#f7981e] hover:text-[#f7981e] text-2xl font-extrabold transition-colors focus:outline-none"
        >
          ✕
        </button>
        <article>
          <a
            href="https://wa.me/573246864647"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="p-3 flex justify-center cursor-pointer">
              <img src={nequi} alt="imagen-contribuye" />
            </div>
          </a>
        </article>
      </div>
    </div>
  );
};
