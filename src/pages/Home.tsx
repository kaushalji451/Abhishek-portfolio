import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slide1 from "../components/Slide1";
import Slide2 from "../components/Slide2";
import Slide3 from "../components/Slide3";
import Slide4 from "../components/Slide4";
import Slide5 from "../components/Slide5";
import Slide6 from "../components/Slide6";
import Footer from "../components/Footer";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 300px
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="text-white relative">
      {/* slide 1 */}
      <Slide1 />

      {/* border */}
      <div className="bg-black py-6">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 mx-auto flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-5 text-sm sm:text-base md:text-lg opacity-70 font-serif text-white">
          <Link
            to="https://www.linkedin.com/in/abhishek-kumar-kaushal-785611318"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            to="https://github.com/kaushalji451"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </Link>
          <Link
            to="https://www.instagram.com/abhishekkaushal2879/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </Link>
        </div>
      </div>

      {/* slides */}
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Footer />

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
        >
          ⬆
        </button>
      )}
    </main>
  );
};

export default Home;
