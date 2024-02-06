import "../styles/Success.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success">
      <div className="success-message">
        <h1>Success!</h1>
        <p>Your payment was successful. Thank you for shopping with us!</p>
        <Link to="/" className="go-home">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
