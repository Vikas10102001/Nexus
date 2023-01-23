import { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../store/authContext";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx=useContext(AuthContext)
  const navigate=useNavigate()

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
 
  const loginHandler = async () => {
    try {
      const data = await axios.post(
        "http://localhost:8080/api/v1/users/login",
        {
          data: { email, password },
          headers: {
            "Content-Type": "application/json"
          },
        }
      );
      if(data.data.status==="success")
      {
           ctx.token=data.data.token
           navigate('/home',{replace:true})
      }
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h1 className="loginLogo">VikasSocial</h1>
          <p className="loginDescription">
            Connect with Friends and world around you with AnchalSocial
          </p>
        </div>
        <div className="loginRight">
          <input
            type="text"
            className="loginInput"
            placeholder="Enter Your Email"
            onChange={emailChangeHandler}
          />
          <input
            type="text"
            className="loginInput"
            placeholder="Enter Your Password"
            onChange={passwordChangeHandler}
          />
          <button className="loginButton" onClick={loginHandler}>
            Log In
          </button>
          <span className="loginForgotPassword">Forgot Password?</span>
          <Link to="/signup" className="signUpButton">
            Create a new account
          </Link>
        </div>
      </div>
    </div>
  );
}
