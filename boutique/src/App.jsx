import Navbar from "./Navbar";
import Shop from "./pages/Shop";

import Footer from "./Footer";
import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

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
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="shop" element={<Shop items={items} />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
