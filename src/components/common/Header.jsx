<<<<<<< HEAD
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import avatar from '../../assets/default-avatar.png';
import { useDispatch, useSelector } from 'react-redux';
const Header = ({ title }) => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log(dispatch);

  return (
    <header className=" px-2 bg-opacity-50 backdrop-blur-lg border-b border-gray-700 m sticky top-0 z-50 bolck ">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl mb-3 font-semibold">{title}</h1>

        <div className="relative flex gap-4 md:block">
          <div className="flex gap-4 text-center  items-center">
            <a
              href="#"
              class="relative inline-flex items-center justify-center w-10 h-10  text-white rounded-full bg-[#f5b754]"
            >
              <IoIosNotificationsOutline className="text-2xl sm:text-3xl text-white" />
              <span class="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-[#f5b754] bg-[#222121] px-1.5 text-sm text-[#f5b754]">
                7
              </span>
            </a>
            <Link className="overflow-hidden rounded-full border border-gray-300 shadow-inner">
              <span className="sr-only">Toggle dashboard menu</span>
              <img
                src={user?.photoURL || avatar}
                alt="Profile"
                className="w-10 h-10 object-cover rounded-full cursor-pointer"
              />
            </Link>
          </div>
=======
import { useState } from "react";
const Header = ({ title }) => {
  const [open, setIsOpen] = useState(false);

  return (
    <header className="md:px-4 px-2 bg-opacity-50 backdrop-blur-lg border-b border-gray-700 sticky top-0 z-50 block">
      <div className="flex justify-between items-center w-full pt-5">
        <h1 className="text-3xl pb-3 pl-12 lg:pl-0 font-semibold">{title}</h1>
        {/* daisy ui */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="cursor-pointer avatar">
            <div className="w-8 rounded-full">
              <img
                onClick={() => setIsOpen(!open)}
                src="https://simgbb.com/avatar/dJqZjDSZwR5z.png"
                alt=""
                className="size-10 object-cover cursor-pointer"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content border-[#f5b754]/10 border fBgBlack rounded-box z-1 mt-3 w-40 p-2 shadow"
          >
            <h2 className="text-xl font-bold">WELCOME to</h2>
            <div className="p-2">
              <a
                href="#"
                class="block rounded-lg px-4 py-2 text-sm text-gray-500 "
                role="menuitem"
              >
                My profile
              </a>
            </div>
          </ul>
>>>>>>> f00b61d29c7a311281fb746c6088badb7b581913
        </div>
      </div>
    </header>
  );
};
export default Header;
