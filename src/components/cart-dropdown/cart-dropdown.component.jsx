import { Link, useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem cartItem={item} key={item.id} />;
        })}
        <Link className="nav-link" to={"/checkout"}>
          <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
