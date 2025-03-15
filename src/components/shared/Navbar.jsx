import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

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
      {["About", "Services", "Contact"].map((item, index) => (
        <li key={index} onClick={() => setIsMenuOpen(false)}>
          <Link
            to={`/${item.toLowerCase()}`}
            className="font-bold hover:text-[#f5b754] px-3 py-2"
          >
            {item}
          </Link>
        </li>
      ))}
    </>
  );

  // const navOptions = (
  //   <>
  //     <li>
  //       <Link
  //         to="/"
  //         className="font-bold hover:text-[#f5b754] px-3 py-2"
  //         onClick={() => setIsMenuOpen(false)}
  //       >
  //         Home
  //       </Link>
  //     </li>
  //     <li>
  //       <Link
  //         to="/about"
  //         className="font-bold hover:text-[#f5b754] px-3 py-2"
  //         onClick={() => setIsMenuOpen(false)}
  //       >
  //         About
  //       </Link>
  //     </li>
  //     <li>
  //       <Link
  //         to="/services"
  //         className="font-bold hover:text-[#f5b754] px-3 py-2"
  //         onClick={() => setIsMenuOpen(false)}
  //       >
  //         Service
  //       </Link>
  //     </li>
  //     <li>
  //       <Link
  //         to="/contact"
  //         className="font-bold hover:text-[#f5b754] lx-3 py-2"
  //         onClick={() => setIsMenuOpen(false)}
  //       >
  //         Contact
  //       </Link>
  //     </li>
  //   </>
  // );

  return (
    <div
      className={`navbar w-full fixed top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#1b1b1b] bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mxw flex justify-between items-center py-5">
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
