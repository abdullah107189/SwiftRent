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
        </div>
      </div>
    </header>
  );
};
export default Header;
