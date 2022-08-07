import { createContext,useState,useEffect } from "react";

export const CartContext = createContext({
isCartOpen:false,
setIsCartOpen:()=>{},
cartItem:[],
addItemtoCart:()=>{},
cartCount:0,
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

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] =useState(false);
    const [cartItem,setCartItem] = useState([]);
    const [cartCount,setCartCount] = useState(0);

    useEffect(()=>{
        const newTotalCartItem =cartItem.reduce((total,cartItem)=>total+cartItem.quantity,0);
        setCartCount(newTotalCartItem);

    },[cartItem]);
    const addItemtoCart = (productToAdd) => {
        setCartItem(addCartItem(cartItem,productToAdd));
    }
    const value = {isCartOpen,setIsCartOpen,addItemtoCart,cartItem,cartCount};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}