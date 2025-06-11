import React, { useState } from "react";
import "./login.css";

const Logins = () => {
  const [action, setAction] = useState("login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (name === "admin123" && password === "admin123") {
      window.location.href = "https://timesofindia.indiatimes.com/us";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underLine"></div>
      </div>

      <div className='inputs'>
        <div className="input">
          Name
          <input
            type="text"
            placeholder={action === "login" ? "Hint : admin" : "Enter the Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {action !== "login" && (
          <div className="input">
            Email
            <input
              type="email"
              placeholder="Enter the Email"
            />
          </div>
        )}

        <div className="input">
          Password
          <input
            type="password"
            placeholder={action === "login" ? "admin123" : "Enter the Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {action === "login" && (
        <div className="forgot_password">
          Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit_controler">
        {action === "login" && (
          <div
            className="submit"
            onClick={handleLogin}
          >
            Login
          </div>
        )}
        <div
          className={action === "signup" ? "submit" : "submit gray"}
          onClick={() => setAction("signup")}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Logins;
