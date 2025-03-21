import { useState } from "react";
const Header = ({ title }) => {
  const [open, setIsOpen] = useState(false);

  return (
    <header className=" px-2 bg-opacity-50 backdrop-blur-lg border-b border-gray-700 m sticky top-0 z-50 bolck ">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl mb-3 font-semibold">{title}</h1>
        {/* daisy ui */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="cursor-pointer avatar">
            <div className="w-8 rounded-full">
              <img
                onClick={() => setIsOpen(!open)}
                src="https://simgbb.com/avatar/dJqZjDSZwR5z.png"
                alt=""
                class="size-10 object-cover cursor-pointer"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content border-[#f5b754]/10 border fBgBlack rounded-box z-1 mt-3 w-40 p-2 shadow"
          >
            <h2 className="text-xl font-bold">WELCOME to</h2>
            <div class="p-2">
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

        <div className="relative md:block">
          <button
            type="button"
            className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Toggle dashboard menu</span>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-10 h-10 object-cover rounded-full"
            />
          </button>

          {open && (
            <div
              className="absolute right-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
              role="menu"
            >
              <div className="p-2">
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  My profile
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Billing summary
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Team settings
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
