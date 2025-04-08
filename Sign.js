import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

const Sign = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To handle errors
  const navigate = useNavigate();

  const showLogin = () => {
    setIsLoginActive(true);
    setError(""); // Clear any existing error
  };

  const showSignup = async (event) => {
    event.preventDefault();
    setIsLoginActive(false);
    setError("");
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User Registered Successfully:", userCredential.user);
      alert("Signup successful! You can now log in.");
      setIsLoginActive(true); // Switch to login form
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successful:", userCredential.user);
      navigate("/Farmer"); // Navigate to Farmer.js
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="sign-container">
      <div className="card">
        <div className="toggle-buttons">
          <button
            id="login-toggle"
            className={isLoginActive ? "active" : ""}
            onClick={showLogin}
          >
            Login
          </button>
          <button
            id="signup-toggle"
            className={!isLoginActive ? "active" : ""}
            onClick={() => setIsLoginActive(false)}
          >
            Signup
          </button>
        </div>
        {isLoginActive ? (
          <div id="login-form" className="form active">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="action-btn">Login</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <p>
              Not registered?{" "}
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setIsLoginActive(false);
                  setError("");
                }}
              >
                Sign up here
              </a>
            </p>
          </div>
        ) : (
          <div id="signup-form" className="form active">
            <h2 style={{ fontWeight: "bold" }}>Signup</h2>
            <form onSubmit={showSignup}>
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Mobile No" required />
              <input type="text" placeholder="Location" required />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="action-btn">Signup</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <p>
              Already registered?{" "}
              <a href="#" onClick={showLogin}>
                Login here
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sign;
