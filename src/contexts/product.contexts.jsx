import { createContext,useState,useEffect } from "react";
import SHOP_DATA from '../shop.data.js';
import { AddCollectionandDocument } from "../utils/firebase/firebase.util.js";

//storage
export const ProductsContext = createContext({
products:[],

});

//component
export const ProductProvider = ({ children }) => {
    const [products,setProducts]= useState([]);
    useEffect(() => { AddCollectionandDocument('categories',SHOP_DATA) }
    ,[]);
    const value ={products};
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
