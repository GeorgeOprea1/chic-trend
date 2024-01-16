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
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleAddToCart = (selectedItem, selectedQuantity) => {
    const existingItem = cartItems.find((item) => item.id === selectedItem.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === selectedItem.id
            ? { ...item, quantity: item.quantity + selectedQuantity }
            : item
        )
      );
    } else {
      const newItem = { ...selectedItem, quantity: selectedQuantity };
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleQuantityChange = (itemId, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(0, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    let total = 0;

    for (const item of cartItems) {
      const itemTotal = item.quantity * item.price;
      total += itemTotal;
    }

    return total;
  };

  const handleQuantityChangeInput = (newQuantity) => {
    newQuantity = Math.max(1, parseInt(newQuantity, 10) || 1);
    setQuantity(newQuantity);
  };

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
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="shop" element={<Shop items={items} />} />
        <Route
          path="cart"
          element={
            <Cart
              cartItems={cartItems}
              handleQuantityChange={handleQuantityChange}
              onRemoveItem={handleRemoveItem}
              calculateTotal={calculateTotal}
            />
          }
        />
        <Route
          path="individual/:id"
          element={
            <IndividualItemPage
              items={items}
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              handleAddToCart={handleAddToCart}
              handleQuantityChangeInput={handleQuantityChangeInput}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
