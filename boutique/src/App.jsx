import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedItems from "./FeatureItems";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        console.log(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
