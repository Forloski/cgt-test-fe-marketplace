import { useCartManagement } from "../../contexts/CartManagement.context";

const CartPage = () => {
  const cartManagement = useCartManagement();

  return (
    <div>
      Are you ready to purchase these?
      <ul>
        {cartManagement.cart?.products.map((cartItem) => (
          <li key={cartItem.name}>
            {cartItem.name} x {cartItem.quantity} -{" "}
            <button onClick={() => cartManagement.removeFromCart(cartItem)}>Remove</button>
          </li>
        ))}
      </ul>
      <div> Total Price: {cartManagement.cartTotal}</div>
      <button onClick={() => cartManagement.clearCart()}>ClearCart</button>
    </div>
  );
};

export default CartPage;
