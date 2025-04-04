import { Menu, ChevronRight } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../assets/default-avatar.png';
import { logoutUser } from '../../redux/auth/authSlice';

const Navbar = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate('/login');
        setIsMenuOpen(false);
      })
      .catch(error => {
        console.error('Logout failed:', error);
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
                ? 'text-[#f5b754] bg-transparent'
                : 'text-white bg-transparent'
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      {['Services', 'About', 'Contact'].map((item, index) => (
        <li key={index} onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `font-bold hover:text-[#f5b754] hover:bg-transparent focus:bg-transparent active:bg-transparent px-3 py-2 ${
                isActive
                  ? 'text-[#f5b754] bg-transparent'
                  : 'text-white bg-transparent'
              }`
            }
          >
            {item}
          </NavLink>
        </li>
      ))}
      {user ? (
        <>
          {/* Dropdown on desktop, direct menu on mobile */}
          <li className="relative md:block hidden">
            {/* using daisy ui  */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="cursor-pointer avatar">
                <div className="w-8 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL || avatar}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content border-[#f5b754]/10 border fBgBlack rounded-box z-1 mt-3 w-40 p-2 shadow"
              >
                <li>
                  <NavLink
                    to="/dashboard"
                    className="block text-[16px] px-4 py-2 hover:bg-[#f5b754] hover:text-black"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-[16px] text-left px-4 py-2 hover:bg-[#f5b754] hover:text-black"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </li>
          {/* Direct dashboard and logout in mobile menu */}
          <li className="md:hidden" onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `font-bold hover:text-[#f5b754] hover:bg-transparent focus:bg-transparent active:bg-transparent px-3 py-2 ${
                  isActive
                    ? 'text-[#f5b754] bg-transparent'
                    : 'text-white bg-transparent'
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
                  ? 'text-[#f5b754] bg-transparent'
                  : 'text-white bg-transparent'
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
      ${isScrolled ? 'sBgBlack bg-opacity-90 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="mxw flex justify-between items-center">
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
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 md:hidden right-0 h-full w-1/2 bg-[#1b1b1b] bg-opacity-95 backdrop-blur-md flex flex-col justify-center items-center z-50 transition-transform duration-300 transform translate-x-0">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 left-6 p-2 rounded-full bg-white hover:bg-[#f5b754] transition duration-300"
          >
            <ChevronRight className="h-5 w-5 orange hover:text-white" />
          </button>
          <ul className="space-y-6 text-center">{navOptions}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
