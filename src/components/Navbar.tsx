import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed w-full top-0 text-white z-50 pt-6 transition-all backdrop-blur-sm duration-300s`}
      >
        {!isOpen ? (
          <div className="min-md:me-25 mx-auto flex flex-col md:flex-row justify-between pe-10 items-center">
            {/* Left container: Logo/Name and Hamburger (on mobile) */}
            <div className="flex items-center justify-between w-full md:w-auto gap-3 order-1 md:order-1">
              {/* Logo/Name */}
              <div className="flex items-center gap-3">
                <p className="p-2 border border-white rounded-full h-10 w-10 text-center cursor-default select-none">
                  A
                </p>
                <span className="font-semibold leading-tight text-xl sm:text-2xl uppercase tracking-wide select-none">
                  Abhishek
                </span>
              </div>
              {/* Hamburger Menu Button (Mobile only) */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(true)}
                  aria-label="Open menu"
                  className="text-white text-3xl"
                >
                  <RxHamburgerMenu />
                </button>
              </div>
            </div>

            {/* Navigation Links (Desktop) */}
            <nav className="hidden md:flex gap-8 lg:gap-12 text-md order-3 md:order-2">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="relative pb-1 after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/hire"
                className="text-white border border-white font-bold rounded-lg py-2 px-6 text-center transition hover:bg-white hover:text-[#091D32]"
              >
                Hire Me
              </Link>
            </nav>
          </div>
        ) : null}
      </header>


      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[999] h-[100vh] flex flex-col items-center justify-center px-6 py-8 overflow-hidden bg-[#091D32]/95 backdrop-blur-sm text-white"
        >
          {/* Close Button */}
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-4xl hover:text-gray-400 transition focus:outline-none"
          >
            <IoClose />
          </button>

          {/* Site Branding */}
          <div className="mb-8 mt-2 text-3xl font-bold uppercase tracking-wide text-center w-full max-w-xs">
            Abhishek
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-8 text-2xl font-semibold items-center mb-10 w-full max-w-xs">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                {label}
              </Link>
            ))}
            {/* Hire Me button in mobile menu */}
            <Link
              to="/hire"
              onClick={() => setIsOpen(false)}
              className="mt-4 text-white border border-white font-bold rounded-lg py-2 px-10 text-center transition hover:bg-white hover:text-[#091D32]"
            >
              Hire Me
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-10 text-3xl text-white justify-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-gray-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
