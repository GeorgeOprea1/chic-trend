import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "./App.css";

const Home = () => {
  return <h2>Home Page</h2>;
};

const Shop = () => {
  return <h2>Shop Page</h2>;
};

const Cart = () => {
  return <h2>Cart Page</h2>;
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
