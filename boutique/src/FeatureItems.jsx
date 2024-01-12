import ProductItem from "./ProductItem";
import "./styles/FeatureItems.css";

const FeaturedItems = ({ items }) => {
  return (
    <div className="featured-container">
      <h1 className="featured-header">Featured Items</h1>
      <div className="items-container">
        {items.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
