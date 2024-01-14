import "./styles/ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ title, image, price, rating }) => {
  return (
    <Link to="" className="product-item">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="title">{title}</h3>
        <p className="price">Price: ${price}</p>
        <p className="rating">
          Rating: {rating.rate} ({rating.count} reviews)
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
