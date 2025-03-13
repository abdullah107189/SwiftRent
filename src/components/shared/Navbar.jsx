import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="font-bold text-tBlack hover:text-orange px-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="font-bold text-[#999] hover:text-[#f5b754] px-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          className="font-bold text-[#999] hover:text-[#f5b754] px-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Service
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="font-bold text-[#999] hover:text-[#f5b754] px-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-fBlack bg-opacity-50 text-tBlack w-full ">
      <div className="w-full md:w-11/12 mx-auto flex justify-between items-center p-4 lg:p-8 border-b border-orange-300">
        <Link to="/" className="flex items-center">
          <span className="ml-2 text-3xl font-black text-[#999]">
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
            <Menu className="h-6 w-6 text-[#999]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-md flex flex-col justify-center items-center z-50 transition-opacity duration-300">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white hover:bg-[#f5b754] transition duration-300"
          >
            <X className="h-6 w-6 text-[#999]" />
          </button>
          <ul className="space-y-6 text-center">{navOptions}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
