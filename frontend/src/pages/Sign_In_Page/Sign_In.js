import React, { useState } from "react";
import Person from "../../assets/images/Sign_In_icon/Person.png";
import Lock from "../../assets/images/Sign_In_icon/Lock.png";
import Logo from "../../assets/images/Main_page_icon/Logo.png";
import Croods_Chart from "../../assets/images/Main_page_icon/Croods_Chart.png";
import Facebook from "../../assets/images/Main_page_icon/link_icon/Facebook.png"
import Instagram from "../../assets/images/Main_page_icon/link_icon/Instagram.png"
import YouTube from "../../assets/images/Main_page_icon/link_icon/YouTube.png"
import Twitter from "../../assets/images/Main_page_icon/link_icon/Twitter.png"
import { Link } from "react-router-dom";
import "./Sign_In.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    console.log("Signing in...");
    console.log("Email Address:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    // Handle authentication here
  };

  return (
    <div>
      <div className="signin-page">
        <header className="signin-header">
          <img src={Logo} alt="Logo" className="logo" />
          <h1 className="signin-h1">CashCalC</h1>
        </header>
        <div className="chart">
          <img src={Croods_Chart} alt="Chart" />
        </div>
        <div className="signin-container">
          <div className="signin-box">
            <h2 className="signin-h2">Sign In</h2>
            <div className="input-with-icon">
              <img src={Person} alt="Person Icon" className="signin-icon" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
            </div>
            <div className="input-with-icon">
              <img src={Lock} alt="Lock Icon" className="signin-icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
              <Link to="/forgot_password">Forgot Password?</Link>
            </div>
            <div>
              <button onClick={handleSignIn}>Sign In</button>
            </div>
            <div>
              <Link to="/sign_up">Or Register Here!</Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="copyright">
          Copyright © 2023 CashCalC. All rights reserved. Terms of Use Privacy
          Policy
        </div>
        <div className="images">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={YouTube} alt="Youtube" />
          <img src={Twitter} alt="Twitter" />
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
