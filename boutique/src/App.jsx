import Navbar from "./Navbar";
import Shop from "./pages/Shop";
import Footer from "./Footer";
import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import IndividualItemPage from "./pages/IndividualItemPage";

const App = () => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

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
        <Route
          path="individual/:id"
          element={
            <IndividualItemPage
              items={items}
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
