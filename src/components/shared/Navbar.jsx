import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }

    if (window.scrollY > 450) {
      setIsNavBg(true);
    } else {
      setIsNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="font-bold hover:text-[#f5b754] px-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="font-bold hover:text-[#f5b754] px-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          className="font-bold hover:text-[#f5b754] px-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Service
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="font-bold hover:text-[#f5b754] lx-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`navbar w-full fixed z-50 transition-all duration-300 ${
        isScroll ? "bg-[#1b1b1b] bg-opacity-50 backdrop-blur-lg shadow-sm " : ""
      } ${isAnimating ? "-top-16" : "top-0"}`}
    >
      <div className="mxw flex justify-between items-center py-2 lg:py-5">
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-black text-white">
            <span className="text-[#f5b754]">S</span>wift
            <span className="text-[#f5b754]">R</span>ent
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <ul className="menu menu-horizontal px-1 flex gap-4">{navOptions}</ul>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full hover:bg-[#f5b754] transition duration-300"
          >
            <Menu className="h-6 w-6 tBlack" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#1b1b1b] bg-opacity-80 backdrop-blur-md flex flex-col justify-center items-center z-50 transition-opacity duration-300">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white hover:bg-[#f5b754] transition duration-300"
          >
            <X className="h-6 w-6 tBlack" />
          </button>
          <ul className="space-y-6 text-center">{navOptions}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
