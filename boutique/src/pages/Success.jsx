import React from "react";
import { Link } from "react-router-dom";
import "../styles/Success.css";

const SuccessPage = () => {
  return (
    <div className="success-container">
      <h2>Payment Successful</h2>
      <p>Your payment was successful. Thank you for your purchase!</p>
      <Link to="/" className="back-to-home-link">
        Go back Home
      </Link>
    </div>
  );
};

export default SuccessPage;
