import { useParams } from "react-router-dom";
import "../styles/IndividualItemPage.css";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

const IndividualItem = ({ items }) => {
  const { id } = useParams();

  const selectedItem = items.find((item) => item.id.toString() === id);

  return (
    <>
      {selectedItem ? (
        <div className="individual-item-container">
          <div>
            <h2 className="individual-title">{selectedItem.title}</h2>
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
              <button aria-label="decrease quantity" disabled="" id="minus">
                <FaCircleMinus className="quantity-icon" />
              </button>
              <input
                aria-label="item quantity"
                type="number"
                value="1"
                className="quantity-input"
              />
              <button aria-label="increase quantity" id="plus">
                <FaCirclePlus className="quantity-icon" />
              </button>
            </div>
            <button className="add-cart-btn">Add to cart</button>
          </div>
        </div>
      ) : (
        <div>No item found with the given ID</div>
      )}
    </>
  );
};

export default IndividualItem;
