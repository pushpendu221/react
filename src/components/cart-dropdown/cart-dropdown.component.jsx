import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.contexts";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const {cartItem} = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => navigate('/checkout');
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      {cartItem.map((cartItem) => <CartItem key={cartItem.id} cartItems={cartItem}/>)}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
