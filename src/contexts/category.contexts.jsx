import { createContext, useState, useEffect } from "react";
import { getCategoryAndDocument } from "../utils/firebase/firebase.util.js";

//storage
export const CategoryContext = createContext({
  categories: {},
});

//component
export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    const getCategoriesMap = async() => {
     const categoryMap = await getCategoryAndDocument();
     console.log(categoryMap);
     setCategories(categoryMap);
    }
    getCategoriesMap();
  }, []);
  const value = { categories };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
