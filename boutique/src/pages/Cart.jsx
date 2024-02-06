import "../styles/Cart.css";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

const Cart = ({
  cartItems,
  handleQuantityChange,
  onRemoveItem,
  calculateTotal,
}) => {
  function checkout() {
    const currentCartItems = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      stripePriceId: getStripePriceId(item.id),
    }));

    fetch("https://backend-chic-trend.onrender.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: currentCartItems }),
    })
      .then((response) => response.json())
      .then((data) => {
        const successUrl = "/success";
        const cancelUrl = "/cancel";

        if (data.success) {
          window.location.href = successUrl;
        } else {
          window.location.href = cancelUrl;
        }
      })
      .catch((error) => {
        console.error("Error during checkout:", error);
      });
  }

  const getStripePriceId = (itemId) => {
    switch (itemId) {
      case 1:
        return "price_1OcTceDnlYS1GOoDeXTtvGdj";
      case 2:
        return "price_1OcTfEDnlYS1GOoDyNkJL7Ef";

      case 3:
        return "price_1OcTgaDnlYS1GOoDjH69lXLj";
      case 4:
        return "price_1OcThlDnlYS1GOoDB739oemx";
      default:
        return null;
    }
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p className="empty-text">Your cart is empty</p>
      ) : (
        <>
          <h2 className="cart-title">Your Cart</h2>
          <div className="titles-cart-container">
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
                    <div>{item.title}</div>
                  </div>
                  <div>${item.price}</div>
                  <div className="cart-btns-container">
                    <div className="increase-decrease-container">
                      <button
                        aria-label="decrease quantity"
                        id="minus"
                        onClick={() =>
                          handleQuantityChange(item.id, "decrease")
                        }
                        disabled={item.quantity === 0}
                      >
                        <FaCircleMinus className="cart-quantity-icon" />
                      </button>
                      <input
                        aria-label="item quantity"
                        type="number"
                        value={item.quantity}
                        className="cart-quantity-input"
                        readOnly
                      />
                      <button
                        aria-label="increase quantity"
                        id="plus"
                        onClick={() =>
                          handleQuantityChange(item.id, "increase")
                        }
                      >
                        <FaCirclePlus className="cart-quantity-icon" />
                      </button>
                    </div>
                    <button
                      aria-label="delete quantity"
                      id="delete"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <FaRegTrashCan className="delete-icon" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">Total: ${calculateTotal()}</div>
          <div className="checkout-container">
            <button id="checkout" aria-label="Checkout" onClick={checkout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
