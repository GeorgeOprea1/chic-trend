import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import "./styles/SideMenu.css";

const SideMenu = ({ onClose, darkTheme, toggleTheme, themeStyles }) => {
  return (
    <div className="side-menu" style={themeStyles}>
      <MdClose className="sidemenu-icons" onClick={onClose} />
      <Link to="/" className="side-link" onClick={onClose} style={themeStyles}>
        <IoHomeOutline className="sidemenu-icons" />
      </Link>
      <Link
        to="/shop"
        className="side-link"
        onClick={onClose}
        style={themeStyles}
      >
        <MdOutlineAddShoppingCart className="sidemenu-icons" />
      </Link>

      <Link
        to="/cart"
        className="side-link"
        onClick={onClose}
        style={themeStyles}
      >
        <IoCartOutline className="sidemenu-icons" />
      </Link>
      <button
        onClick={toggleTheme}
        className="sidenav-icon"
        style={themeStyles}
        aria-label={
          darkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"
        }
      >
        {darkTheme ? (
          <FiSun className="sidemenu-icons" />
        ) : (
          <FaRegMoon className="sidemenu-icons" />
        )}
      </button>
    </div>
  );
};

export default SideMenu;
