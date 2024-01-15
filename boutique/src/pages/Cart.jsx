const Cart = ({ cartItems }) => {
  return (
    <>
      <div>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;
