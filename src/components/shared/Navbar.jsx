import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h1>This is Navbar</h1>
      <div className="text-center">
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
