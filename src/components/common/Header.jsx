import { useState } from 'react';

const Header = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" px-2 bg-opacity-50 backdrop-blur-lg border-b border-gray-700 m sticky top-0 z-50 bolck ">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl mb-3 font-semibold">{title}</h1>

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
