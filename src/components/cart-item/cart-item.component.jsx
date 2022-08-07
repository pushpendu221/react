import './cart-item.styles.scss';
const CartItem = ({cartItems}) => {
const {name,price,quantity} = cartItems;
  return <div>
  <span className='name'>{name}</span>
          <span className='price'>{price}</span>
          <span className='quantity'>{quantity}</span>
  </div>;
};

export default CartItem;