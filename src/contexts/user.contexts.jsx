import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListner,CreateUserDocumentfromAuth } from "../utils/firebase/firebase.util"; 

//storage
export const UserContext = createContext({
currentUser:null,
setCurrentUser:()=>null,
});

//component
export const UserProvider = ({ children }) => {
    const [currentUser,setCurrentUser]= useState(null);
    useEffect(() => {
      const unSubscribe = onAuthStateChangedListner((user)=>{
       // console.log(user);
        if(user){
            CreateUserDocumentfromAuth(user)
        }
        setCurrentUser(user);
      })
      return unSubscribe;
    },[]);
    const value ={currentUser,setCurrentUser}
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
