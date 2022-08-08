import { createContext,useState,useEffect } from "react";

export const CartContext = createContext({
isCartOpen:false,
setIsCartOpen:()=>{},
cartItem:[],
addItemtoCart:()=>{},
removeItemtoCart:()=>{},
clearItem:()=>{},
cartCount:0,
cartTotal:0,
});

const addCartItem =(cartItems,productToadd) =>{
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToadd.id
    );
    if(existingCartItem){
        return cartItems.map((cartItem)=>
        cartItem.id === productToadd.id 
        ? {...cartItem, quantity:cartItem.quantity + 1}
        : cartItem );
    }
    return [...cartItems,{...productToadd,quantity:1}]
}

const clearItemFromCart =(cartItems,itemToRemove) => cartItems.filter((cartItem)=>cartItem.id !== itemToRemove.id);
      



const removeCartItem =(cartItems,itemToRemove) => {
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === itemToRemove.id
    );

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem)=>cartItem.id !== itemToRemove.id);
    }

     return cartItems.map((cartItem) =>
        cartItem.id === itemToRemove.id 
        ? {...cartItem, quantity:cartItem.quantity - 1}
        : cartItem
     );
}


export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] =useState(false);
    const [cartItem,setCartItem] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);

    useEffect(()=>{
        const newTotalCartItem =cartItem.reduce((total,cartItem)=>total+cartItem.quantity,0);
        setCartCount(newTotalCartItem);

    },[cartItem]);
    useEffect(()=>{
        const cartTotal =cartItem.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0);
        setCartTotal(cartTotal);

    },[cartItem]);
    const addItemtoCart = (productToAdd) => {
        setCartItem(addCartItem(cartItem,productToAdd));
    }

    const removeItemtoCart = (itemToRemove) => {
        setCartItem(removeCartItem(cartItem,itemToRemove));
    }
    const clearItem = (itemToRemove) => {
        setCartItem(clearItemFromCart(cartItem,itemToRemove));
    }

    const value = {isCartOpen,setIsCartOpen,addItemtoCart,removeItemtoCart,clearItem,cartItem,cartCount,cartTotal};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}