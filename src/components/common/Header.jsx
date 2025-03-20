import { useState } from 'react';

const Header = ({ title }) => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <header className="px-2   bg-opacity-50 backdrop-blur-lg border-b border-gray-700 z-0">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold ">{title}</h1>
          <div class="relative md:block">
            <button
              type="button"
              class="overflow-hidden rounded-full border  shadow-inner"
            >
              <span class="sr-only">Toggle dashboard menu</span>

              <img
                onClick={() => setIsOpen(!open)}
                src="https://simgbb.com/avatar/dJqZjDSZwR5z.png"
                alt=""
                class="size-10 object-cover cursor-pointer"
              />
            </button>

            {open && (
              <div
                class="absolute end-0  mt-0.5 w-56 divide-y  rounded-md   z-20  shadow-lg"
                role="menu"
              >
                <h2 className="text-xl font-bold">WELCOME!</h2>
                <div class="p-2">
                  <a
                    href="#"
                    class="block rounded-lg px-4 py-2 text-sm text-gray-500 "
                    role="menuitem"
                  >
                    My profile
                  </a>

                  <a
                    href="#"
                    class="block rounded-lg px-4 py-2 text-sm "
                    role="menuitem"
                  >
                    Billing summary
                  </a>

                  <a
                    href="#"
                    class="block rounded-lg px-4 py-2 text-sm text-gray-500 "
                    role="menuitem"
                  >
                    Team settings
                  </a>
                </div>

                <div class="p-2">
                  <form method="POST" action="#">
                    <button
                      type="submit"
                      class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                      </svg>
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
