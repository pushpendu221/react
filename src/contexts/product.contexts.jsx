import { createContext,useState } from "react";
import PRODUCTS from '../shop.data.json';

//storage
export const ProductsContext = createContext({
products:[],

});

//component
export const ProductProvider = ({ children }) => {
    const [products,setProducts]= useState(PRODUCTS);
    const value ={products};
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
