import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="logo">
          Chic-Trend
        </Link>
        <div className="search-input">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="">Shop</Link>
          <Link to="">
            <IoCartOutline />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
