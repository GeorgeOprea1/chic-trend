import { useParams } from "react-router-dom";
import "../styles/IndividualItemPage.css";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

const IndividualItem = ({
  items,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  handleAddToCart,
  handleQuantityChangeInput,
}) => {
  const { id } = useParams();

  const selectedItem = items.find((item) => item.id.toString() === id);

  const { backgroundColor, color } = useContext(ThemeContext).themeStyles;

  const individualStyles = {
    backgroundColor,
    color,
  };

  return (
    <>
      {selectedItem ? (
        <div className="individual-item-container" style={individualStyles}>
          <div>
            <h2 className="individual-title" style={individualStyles}>
              {selectedItem.title}
            </h2>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="individual-img"
            />
            <p className="individual-description">
              Description: {selectedItem.description}
            </p>
            <p className="individual-price">Price: ${selectedItem.price}</p>
            <p className="individual-rating">
              Rating: {selectedItem.rating.rate} ({selectedItem.rating.count}{" "}
              reviews)
            </p>
          </div>
          <div className="add-container">
            <div className="quantity-container">
              <button
                aria-label="decrease quantity"
                disabled=""
                id="minus"
                onClick={decreaseQuantity}
              >
                <FaCircleMinus
                  className="quantity-icon"
                  style={individualStyles}
                />
              </button>
              <input
                aria-label="item quantity"
                type="number"
                value={quantity}
                className="quantity-input"
                onChange={handleQuantityChangeInput}
              />
              <button
                aria-label="increase quantity"
                id="plus"
                onClick={increaseQuantity}
              >
                <FaCirclePlus
                  className="quantity-icon"
                  style={individualStyles}
                />
              </button>
            </div>
            <button
              to="/cart"
              className="add-cart-btn"
              onClick={() => handleAddToCart(selectedItem, quantity)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <div>No item found with the given ID</div>
      )}
    </>
  );
};

export default IndividualItem;
