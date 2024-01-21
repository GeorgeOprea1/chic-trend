import { Link } from "react-router-dom";
import "./styles/Hero.css";
import { useContext } from "react";
import { ThemeContext } from "./App";

const Hero = () => {
  const { backgroundColor, color } = useContext(ThemeContext).themeStyles;

  const heroStyles = {
    backgroundColor,
    color,
  };

  return (
    <section className="hero-container" style={heroStyles}>
      <h1 className="hero-header" style={heroStyles}>
        Your one-stop destination for all your shopping needs
      </h1>
      <p className="hero-para" style={heroStyles}>
        Discover an unparalleled shopping experience with our extensive
        selection of products, unbeatable prices, and exceptional customer
        service. Shop now and transform your shopping journey with us.
      </p>
      <Link to="/shop" className="custom-link">
        Shop now
      </Link>
    </section>
  );
};
export default Hero;
