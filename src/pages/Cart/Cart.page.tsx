import { useCartManagement } from "../../contexts/CartManagement.context";

const CartPage = () => {
  const cartManagement = useCartManagement();

  if (cartManagement.isCartLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Are you ready to purchase these?
      <ul id="list">
        {cartManagement.cart?.products.map((item) => (
          <div key={item.id}>
            <li
              id={`list-item-${item.name}`}
            >{`${item.name} x ${item.quantity} = ${item.price} USD`}</li>
            <button
              id={`btn-rmv-item-${item.name}`}
              onClick={() => cartManagement.removeFromCart(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
      <div id="txt-total-price"> Total Price: {cartManagement.cartTotal} USD</div>
      <button id="btn-clear-cart" onClick={() => cartManagement.clearCart()}>
        ClearCart
      </button>
    </div>
  );
};

export default CartPage;
