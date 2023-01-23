import "./SignUp.css";
import { Link } from "react-router-dom";
const signUpButtonHandler=()=>{
  
}

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h1 className="loginLogo">AnchalSocial</h1>
          <p className="loginDescription">
            Connect with Friends and world around you with AnchalSocial
          </p>
        </div>
        <div className="loginRight">
          <input type="text" className="loginInput" placeholder="Enter Your Email" />
          <input type="text" className="loginInput" placeholder="Enter Your Username" />
          <input type="text" className="loginInput" placeholder="Enter Your password" />
          <input type="text" className="loginInput" placeholder="Confirm Your Password" />
          <button className="signupButton">Create Account</button>
          <Link to="/login" className="loginButton" onClick={signUpButtonHandler}>Log in to your account </Link>
        </div>
      </div>
    </div>
  );
}
