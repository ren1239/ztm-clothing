import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div>
      I am checkout
      <div className="checkout-container">
        <div className="checkout-header">
          <HeaderBlock>Product</HeaderBlock>
          <HeaderBlock>Quantity</HeaderBlock>
          <HeaderBlock>Price</HeaderBlock>
          <HeaderBlock>Remove</HeaderBlock>
        </div>
        {cartItems.map((cartItem) => {
          return <CheckoutItem cartItem={cartItem} />;
        })}
        <span className="total">Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default CheckOut;

const HeaderBlock = ({ children }) => (
  <div className="headder-block">
    <span>{children}</span>
  </div>
);
