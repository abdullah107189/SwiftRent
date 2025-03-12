import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white">
      <div className="text-center flex items-center justify-center md:gap-10">
        <NavLink
          to="/"
          className="text-center  text-xl orange hover:text-orange-300"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="text-center  text-xl hover:text-orange-300"
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className="text-center  text-xl hover:text-orange-300"
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className="text-center  text-xl hover:text-orange-300"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
