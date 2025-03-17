const Header = ({ title }) => {
  return (
    <>
      <header className=" px-4  bg-opacity-50 backdrop-blur-lg border-b border-gray-700">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <div class="relative md:block">
            <button
              type="button"
              class="overflow-hidden rounded-full border border-gray-300 shadow-inner"
            >
              <span class="sr-only">Toggle dashboard menu</span>

              <img
                src="https://simgbb.com/avatar/dJqZjDSZwR5z.png"
                alt=""
                class="size-10 object-cover"
              />
            </button>

            <div
              class="absolute end-0 z-20 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
              role="menu"
            >
              <div class="p-2">
                <a
                  href="#"
                  class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  My profile
                </a>

                <a
                  href="#"
                  class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Billing summary
                </a>

                <a
                  href="#"
                  class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
