import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import "./styles/Navbar.css";
import { ThemeContext } from "./App";
import { useContext } from "react";
import { FiSun } from "react-icons/fi";

import { FaRegMoon } from "react-icons/fa";

const Navbar = ({ cartItems }) => {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const { darkTheme, toggleTheme, themeStyles } = useContext(ThemeContext);

  return (
    <nav style={themeStyles}>
      <div className="navbar-container" style={themeStyles}>
        <Link to="/" className="logo" style={themeStyles}>
          Chic-Trend
        </Link>

        <div className="search-input">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-home" style={themeStyles}>
            Home
          </Link>
          <Link to="/shop" className="nav-shop" style={themeStyles}>
            Shop
          </Link>{" "}
          <button
            onClick={toggleTheme}
            className="toggle-btn"
            style={themeStyles}
          >
            {darkTheme ? <FiSun /> : <FaRegMoon />}
          </button>
          <Link to="/cart" className="nav-cart">
            <div className="nav-cart-quantity">{totalQuantity}</div>
            <IoCartOutline className="cart-icon" style={themeStyles} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
