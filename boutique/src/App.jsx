import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedItems from "./FeatureItems";
import Footer from "./Footer";
import "./App.css";

const App = ({ items }) => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <FeaturedItems items={items} />
      <Footer />
    </div>
  );
};

export default App;
