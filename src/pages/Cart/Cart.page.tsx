function cartItems() {
  return [];
}
const CartPage = () => {
  return (
    <div>
      Are you ready to purchase these?
      <ul>
        {cartItems().map((cartItem) => (
          <li key={cartItem}>{cartItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;