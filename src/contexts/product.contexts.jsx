import { createContext, useState, useEffect } from "react";
import { getCategoryAndDocument } from "../utils/firebase/firebase.util.js";

//storage
export const ProductsContext = createContext({
  products: [],
});

//component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategoriesMap = async() => {
     const categoryMap = await getCategoryAndDocument();
     console.log(categoryMap);
    }
    getCategoriesMap();
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
