import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import avatar from "../../assets/default-avatar.png";
import { useSelector } from "react-redux";
const Header = ({ title }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className=" px-2 bg-opacity-50 backdrop-blur-lg border-b border-gray-700 m sticky top-0 z-50 bolck py-2">
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
        </div>
      </div>
    </header>
  );
};
export default Header;
