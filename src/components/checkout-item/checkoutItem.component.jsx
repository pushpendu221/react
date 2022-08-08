import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';
import './checkoutItem.styles.scss';

const CheckoutItem = ({cartItems}) =>{
    const {clearItem,addItemtoCart,removeItemtoCart} = useContext(CartContext);
    const { name, imageUrl, quantity, price } = cartItems;
    const clearItemHandler = () => clearItem(cartItems);
    const addItemHandler = () => addItemtoCart(cartItems);
    const removeItemHandler = () => removeItemtoCart(cartItems);
    return(
        <div className="checkout-item-container">
        <div className='image-container'>
            <img src={`${imageUrl}`} alt={name} />
      </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
        <div className='value'>{quantity}</div>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
    );
}
export default CheckoutItem;