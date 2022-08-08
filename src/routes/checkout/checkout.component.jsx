import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';
import CheckoutItem from '../../components/checkout-item/checkoutItem.component';
import './checkout.styles.scss';

const Checkout = () => {
const {cartItem,cartTotal} = useContext(CartContext);
    return(
        <div className='checkout-container'>
        <div className='checkout-header'>
        <div className='header-block'>
        <span>Product</span>
        </div>
        <div className='header-block'>
        <span>Description</span>
        </div>
        <div className='header-block'>
        <span>Qantity</span>
        </div>
        <div className='header-block'>
        <span>Price</span>
        </div>
        <div className='header-block'>
        <span>Remove</span>
        </div>
        </div>
       
        {cartItem.map((caritem) =>{
            return(
                <CheckoutItem key = {caritem.id} cartItems ={caritem}/>
            );
        })}
        <span className='total'>Total: ${cartTotal}</span>
        </div>
    );
}
export default Checkout;