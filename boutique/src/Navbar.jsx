import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import "./styles/Navbar.css";
import { ThemeContext } from "./App";
import SideMenu from "./SideMenu";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ cartItems, onSearch, items }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(searchInput);

    const matchingItem = items.find((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (matchingItem) {
      navigate(`/individual/${matchingItem.id}`);
    } else {
      alert("No such item found");
    }
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const { darkTheme, toggleTheme, themeStyles } = useContext(ThemeContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1000);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav style={themeStyles}>
      <div className="navbar-container" style={themeStyles}>
        <Link to="/" className="logo" style={themeStyles}>
          Chic-Trend
        </Link>

        <div className="search-input">
          <input
            type="text"
            placeholder="Search..."
            className="input"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            id="search-btn"
            aria-label="Search the item"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>

        {isWideScreen ? (
          <div className="nav-links">
            <Link to="/" className="nav-home" style={themeStyles}>
              Home
            </Link>
            <Link to="/shop" className="nav-shop" style={themeStyles}>
              Shop
            </Link>
            <button
              onClick={toggleTheme}
              id="toggle-btn"
              style={themeStyles}
              aria-label={
                darkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"
              }
            >
              {darkTheme ? <FiSun /> : <FaRegMoon />}
            </button>
            <Link to="/cart" className="nav-cart">
              <div className="nav-cart-quantity">{totalQuantity}</div>
              <IoCartOutline className="cart-icon" style={themeStyles} />
            </Link>
          </div>
        ) : (
          <>
            <div className="menu-toggle" onClick={toggleMenu}>
              <IoMenu className="menu-icon" />
            </div>
            {menuVisible && (
              <SideMenu
                onClose={closeMenu}
                darkTheme={darkTheme}
                toggleTheme={toggleTheme}
                totalQuantity={totalQuantity}
                themeStyles={themeStyles}
              />
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
