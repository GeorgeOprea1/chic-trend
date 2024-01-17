import "./styles/ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, image, price, rating }) => {
  return (
    <Link to={`/individual/${id}`} className="product-item">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h1 className="title">{title}</h1>
        <p className="price">Price: ${price}</p>
        <p className="rating">
          Rating: {rating.rate} ({rating.count} reviews)
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
