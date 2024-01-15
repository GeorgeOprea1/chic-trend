import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import "./styles/Navbar.css";

const Navbar = ({ cartItems }) => {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
          <Link to="/" className="nav-home">
            Home
          </Link>
          <Link to="/shop" className="nav-shop">
            Shop
          </Link>
          <Link to="/cart" className="nav-cart">
            <div className="nav-cart-quantity">{totalQuantity}</div>
            <IoCartOutline className="cart-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
