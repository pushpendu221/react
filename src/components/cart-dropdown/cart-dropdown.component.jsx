import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.contexts";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const {cartItem} = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      {cartItem.map((cartItem) => <CartItem key={cartItem.id} cartItems={cartItem}/>)}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
