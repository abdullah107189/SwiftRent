import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import avatar from '../../assets/default-avatar.png';
import { useSelector } from 'react-redux';
import ThemeToggle from '../shared/ThemeToggle';
const Header = ({ title, text }) => {
  const { user } = useSelector(state => state.auth);

  return (
    <header className=" px-2 bg-opacity-50 backdrop-blur-lg border-b dark:border-gray-700 border-black/20 m sticky top-0 z-50 bolck py-2">
      <div className="flex justify-between items-center w-full">
        <div className=" rounded-2xl shadow-md text-white mb-6">
          <h1 className="text-3xl font-bold text-[#f5b754] mb-2">{title}</h1>
          <p className="text-lg text-gray-200">{text}</p>
        </div>

        <div className="relative flex gap-4 md:block">
          <div className="flex gap-4 text-center  items-center">
            <>
              {/* Dropdown on desktop, direct menu on mobile */}
              <li className="relative md:block hidden">
                {/* using daisy ui  */}
                <div className="dropdown dropdown-end relative ">
                  <div
                    tabIndex={0}
                    role="button"
                    className="cursor-pointer avatar gap-4"
                  >
                    <a
                      href="#"
                      class="relative inline-flex items-center justify-center w-10 h-10  text-white rounded-full bg-[#f5b754]"
                    >
                      <IoIosNotificationsOutline className="text-2xl sm:text-3xl text-white" />
                      <span class="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-[#f5b754] bg-[#222121] px-1.5 text-sm orange">
                        7
                      </span>
                    </a>
                    <div className="w-10 h-10 rounded-full">
                      <img
                        referrerPolicy="no-referrer"
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL || avatar}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content border-[#f5b754]/10 border sBgBlack rounded-box z-1 mt-3 w-40 p-2 shadow"
                  >
                    <li>
                      <ThemeToggle></ThemeToggle>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Direct dashboard and logout in mobile menu */}
              <li className="md:hidden">
                <ThemeToggle></ThemeToggle>
              </li>
            </>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
