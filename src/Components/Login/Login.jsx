import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useAuth } from "../../Context/AuthContext";
import "./Login.css";

const Login = ({ setShowLogIn }) => {
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { login } = useAuth();

  const handleAction = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setShowSuccessPopup(false);

    try {
      let message = "";
      const userData = {
        name: name.trim(),
        email: email.trim(),
        address: address.trim(),
      };

      if (currentState === "Sign Up") {
        login(userData); // Save to context + localStorage
        message = "✅ Account created successfully!";
      } else {
        const storedUser = localStorage.getItem("bakers-user");
        if (!storedUser) throw new Error("User not found. Please sign up first.");
        const parsedUser = JSON.parse(storedUser);

        if (parsedUser.email !== email.trim() || password.trim().length < 4) {
          throw new Error("Incorrect email or password.");
        }

        login(parsedUser);
        message = "✅ Logged in successfully!";
      }

      setSuccessMessage(message);
      setShowSuccessPopup(true);

      setTimeout(() => {
        setShowSuccessPopup(false);
        setShowLogIn(false);
      }, 2000);

      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
    } catch (err) {
      alert("❌ " + (err?.message || "Something went wrong."));
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="login-pop-up">
      <form className="login-popup-container" onSubmit={handleAction}>
        <div className="login-pop-title">
          <h2>{currentState}</h2>
          <IoMdClose id="close-login" onClick={() => setShowLogIn(false)} />
        </div>

        <div className="login-popup-input">
          {currentState === "Sign Up" && (
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          )}
          <input type="text" placeholder="Your Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div className="btn">
          <button type="submit" disabled={formLoading}>
            {formLoading ? (currentState === "Sign Up" ? "Creating..." : "Logging In...") : currentState}
          </button>
        </div>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the terms and conditions.</p>
        </div>

        <p>
          {currentState === "Login" ? (
            <>
              No account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login</span>
            </>
          )}
        </p>
      </form>

      {showSuccessPopup && <div className="success-popup">{successMessage}</div>}
    </div>
  );
};

export default Login;
