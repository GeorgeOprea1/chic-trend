import ProductItem from "./ProductItem";
import "./styles/FeatureItems.css";
import { useContext } from "react";
import { ThemeContext } from "./App";

const FeaturedItems = ({ items }) => {
  const { backgroundColor, color } = useContext(ThemeContext).themeStyles;

  const featureStyles = {
    backgroundColor,
    color,
  };

  return (
    <div className="featured-container" style={featureStyles}>
      <h1 className="featured-header" style={featureStyles}>
        Featured Items
      </h1>
      <div className="items-container" style={featureStyles}>
        {items.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
