import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Shop.css";

import ProductItem from "../ProductItem";

const Shop = ({ items }) => {
  return (
    <div className="shop-cotainer">
      <Navbar />
      <div className="shop-items-container">
        {items.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
