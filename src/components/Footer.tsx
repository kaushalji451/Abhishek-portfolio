
import { FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full text-gray-200 px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-10 border-t border-white">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      {/* LEFT SIDE */}
      <div className="w-full md:w-auto">
        <div className="text-xl md:text-2xl tracking-wide uppercase">
          ABHISHEK KUMAR KAUSHAL
        </div>
        <div className="text-xs mt-1">
          © {new Date().getFullYear()}  Abhishek Kumar Kaushal. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-auto flex flex-col-reverse md:flex-row justify-between md:justify-end items-start md:items-center gap-4 md:gap-5">
        {/* SOCIAL BUTTONS */}
        <div className="flex gap-3">
          <button
            aria-label="Close"
            className="text-gray-400 hover:text-white transition"
            tabIndex={0}
          >
            <IoClose size={20} />
          </button>
          <Link
            to="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
        {/* NAVIGATION */}
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm md:text-base font-light whitespace-nowrap mb-2 md:mb-0">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/" className="hover:underline">Skills</Link>
          <Link to="/" className="hover:underline">Proejcts</Link>
          <Link to="/" className="hover:underline">Exeperience</Link>
          <Link to="/" className="hover:underline">Contact Me</Link>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
