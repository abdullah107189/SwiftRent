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
          className="font-bold text-gray-700 hover:text-blue-600 px-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="font-bold text-gray-700 hover:text-blue-600 px-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          className="font-bold text-gray-700 hover:text-blue-600 px-3 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Service
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black bg-opacity-50 text-white w-full fixed top-0 left-0 z-50">
      <div className="w-full md:w-11/12 mx-auto flex justify-between items-center px-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <span className="ml-2 text-xl font-bold text-gray-800">
            SwiftRent
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full hover:bg-gray-300 transition duration-300"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-md flex flex-col justify-center items-center z-50 transition-opacity duration-300">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white hover:bg-gray-200 transition duration-300"
          >
            <X className="h-6 w-6 text-black" />
          </button>
          <ul className="space-y-6 text-center">{navOptions}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
