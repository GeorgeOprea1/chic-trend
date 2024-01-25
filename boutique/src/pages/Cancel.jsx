import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cancel.css";

const CancelPage = () => {
  return (
    <div className="cancel-container">
      <h2>Payment Canceled</h2>
      <p>
        Your payment was canceled. You can go back to the cart{" "}
        <Link to="/" className="back-to-cart-link">
          here
        </Link>
      </p>
    </div>
  );
};

export default CancelPage;
