import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";


const Shoppage = () => {
  return (
   <div>
   <h1>This is Shop Page </h1>
   </div>
  );
}
 const App = () => {
  return (
    <Routes>
    <Route path="/"  element={ <Navigation/>}>
      <Route index element={ <Home/>} />
      <Route path="shop"  element={ <Shoppage/>} />
    </Route>
    </Routes>   
  );
}

export default App;