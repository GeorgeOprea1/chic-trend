import "../styles/Shop.css";
import ProductItem from "../ProductItem";

const Shop = ({ items }) => {
  return (
    <div className="shop-cotainer">
      <div className="shop-items-container">
        {items.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
