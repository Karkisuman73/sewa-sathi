import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ number }) => {
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-lg"
    >
      <FaWhatsapp
        size={18}
        className="text-slate-400 hover:text-white"
      />
    </a>
  );
};

export default WhatsAppButton;