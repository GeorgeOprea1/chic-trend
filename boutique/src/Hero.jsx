import { Link } from "react-router-dom";
import "./styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <h1 className="hero-header">
        Your one-stop destination for all your shopping needs
      </h1>
      <p className="hero-para">
        Discover an unparalleled shopping experience with our extensive
        selection of products, unbeatable prices, and exceptional customer
        service. Shop now and transform your shopping journey with us.
      </p>
      <Link to="/store" className="custom-link">
        Shop now
      </Link>
    </section>
  );
};
export default Hero;
