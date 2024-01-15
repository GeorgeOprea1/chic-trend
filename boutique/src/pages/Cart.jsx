import "../styles/Cart.css";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <h2 className="cart-title">Your Cart</h2>
          <div className="individual-item-cart-container">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
          </div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="individual-item-cart-container">
                  <div className="img-cart-container">
                    <img src={item.image} alt={item.title} />
                    {item.title}
                  </div>
                  <div>${item.price}</div>
                  <div className="cart-btns-container">
                    <div className="increase-decrease-container">
                      <button
                        aria-label="decrease quantity"
                        disabled=""
                        id="minus"
                      >
                        <FaCircleMinus className="cart-quantity-icon" />
                      </button>
                      <input
                        aria-label="item quantity"
                        type="number"
                        value={item.quantity}
                        className="cart-quantity-input"
                      />
                      <button aria-label="increase quantity" id="plus">
                        <FaCirclePlus className="cart-quantity-icon" />
                      </button>
                    </div>
                    <button aria-label="delete quantity" id="delete">
                      <FaRegTrashCan className="delete-icon" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">Total</div>
        </>
      )}
    </div>
  );
};

export default Cart;
