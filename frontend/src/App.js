import Home from "./page/Home/Home";
import "./App.css";
import SignUp from "./page/SignUp/SignUp";
import Profile from "./page/Profile/Profile";
import Messenger from "./page/Messenger/Messenger";
import {Routes,Route} from "react-router-dom";
import Login from "./page/Login/Login";
import AuthContext from "./store/authContext";
import { useContext } from "react";

function App()
{
const ctx=useContext(AuthContext)
console.log(ctx)
return(
<Routes>    
<Route path="/" element={<SignUp/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/messenger" element={<Messenger/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/profile/:userId" element={<Profile/>}/> 
</Routes>
)
}
export default App;
