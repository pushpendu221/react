import { createContext,useState } from "react";

//storage
export const UserContext = createContext({
currentUser:null,
setCurrentUser:()=>null,
});

//component
export const UserProvider = ({ children }) => {
    const [currentUser,setCurrentUser]= useState(null);
    const value ={currentUser,setCurrentUser}
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
