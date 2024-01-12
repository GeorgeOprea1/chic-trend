import "./styles/ProductItem.css";

const ProductItem = ({ title, image, price, rating }) => {
  return (
    <div className="product-item">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="title">{title}</h3>
        <p className="price">Price: ${price}</p>
        <p className="rating">
          Rating: {rating.rate} ({rating.count} reviews)
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
