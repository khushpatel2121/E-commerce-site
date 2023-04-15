import Home from "./pages/Home"
import './App.css';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Productlist from "./pages/Productlist"
import Product from "./pages/Product";
import Register from "./pages/register";
import Login from "./pages/login";
import Cart from "./pages/Cart";
import Success from "./pages/success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state)=>state.user.currentUser)

  return (
   
    <div className="App">
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products/:category" element={<Productlist/>}/>
  <Route path="/products/" element={<Productlist/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/product/:id' element={<Product/>}/>
  <Route path="/register" element={user ? <Home/>:<Register/>}/>
  <Route path="/login" element={user ? <Home/>:<Login/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/success" element={<Success/>}/>
</Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
