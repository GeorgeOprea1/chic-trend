import "../styles/Cancel.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="cancel">
      <div className="cancel-message">
        <h1>Checkout Failed</h1>
        <p>
          Sorry, there was an issue processing your payment. Please try again or
          contact support.
        </p>
        <Link to="/" className="go-home">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
