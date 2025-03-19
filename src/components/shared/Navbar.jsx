import { X, Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../assets/default-avatar.png";
import { logoutUser } from "../../redux/auth/authSlice";

const Navbar = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate("/login");
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold hover:text-[#f5b754] hover:bg-transparent focus:bg-transparent active:bg-transparent px-3 py-2 ${
              isActive
                ? "text-[#f5b754] bg-transparent"
                : "text-white bg-transparent"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      {["About", "Services", "Contact"].map((item, index) => (
        <li key={index} onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `font-bold hover:text-[#f5b754] hover:bg-transparent focus:bg-transparent active:bg-transparent px-3 py-2 ${
                isActive
                  ? "text-[#f5b754] bg-transparent"
                  : "text-white bg-transparent"
              }`
            }
          >
            {item}
          </NavLink>
        </li>
      ))}
      {user ? (
        <>
          {/*Dropdown on desktop, direct menu on mobile */}
          <li className="relative md:block hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src={user?.photoURL || avatar}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-[#1b1b1b] text-white rounded-md shadow-lg z-10">
                <li>
                  <NavLink
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-[#f5b754] hover:text-black"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-[#f5b754] hover:text-black"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </li>
          {/* Direct dashboard and logout in mobile menu */}
          <li className="md:hidden" onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `font-bold hover:text-[#f5b754] hover:bg-transparent focus:bg-transparent active:bg-transparent px-3 py-2 ${
                  isActive
                    ? "text-[#f5b754] bg-transparent"
                    : "text-white bg-transparent"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="md:hidden" onClick={handleLogout}>
            <button className="font-bold text-white hover:text-[#f5b754] px-3 py-2 bg-transparent w-full text-center">
              Logout
            </button>
          </li>
        </>
      ) : (
        <li onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `font-bold hover:text-[#f5b754] hover:bg-transparent focus:bg-transparent active:bg-transparent px-3 py-2 ${
                isActive
                  ? "text-[#f5b754] bg-transparent"
                  : "text-white bg-transparent"
              }`
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-500 
      ${isScrolled ? "sBgBlack bg-opacity-90 shadow-lg" : "bg-transparent"}`}
    >
      <div className="mxw flex justify-between items-center py-3">
        <NavLink to="/" className="flex items-center">
          <span className="text-3xl font-black text-white">
            <span className="text-[#f5b754]">S</span>wift
            <span className="text-[#f5b754]">R</span>ent
          </span>
        </NavLink>
        <div className="hidden md:flex items-center my-3 gap-4">
          <ul className="px-1 flex gap-4">{navOptions}</ul>
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
