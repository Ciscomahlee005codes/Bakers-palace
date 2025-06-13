import React, { useState, useEffect, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile, 
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase";
import "./Login.css";

// --------- AUTH CONTEXT ----------
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setUserLoggedIn(true);
        localStorage.setItem(
          "bakers-user",
          JSON.stringify({
            name: user.displayName || "",
            email: user.email,
          })
        );
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
        localStorage.removeItem("bakers-user");
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// ---------- LOGIN / SIGNUP COMPONENT ----------
const Login = ({ setShowLogIn }) => {
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [address, setAddress] = useState("");

  const handleAction = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setShowSuccessPopup(false);

    try {
      let message = "";

      if (currentState === "Sign Up") {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCred.user;

        //  Set display name properly
        await updateProfile(user, { displayName: name });

        await setDoc(doc(db, "users", user.uid), { name, email, address });

        //  Save locally
        localStorage.setItem(
          "bakers-user",
          JSON.stringify({ name, email, address })
        );

        message = "✅ Account created successfully!";
      } else {
        const userCred = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCred.user;

        localStorage.setItem(
          "bakers-user",
          JSON.stringify({
            name: user.displayName || "",
            email: user.email,
          })
        );

        message = "✅ Logged in successfully!";
      }

      // Show popup
      setSuccessMessage(message);
      setShowSuccessPopup(true);

      setTimeout(() => {
        setShowSuccessPopup(false);
        setShowLogIn(false);
      }, 5000);

      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Auth Error:", err);
      alert("❌ " + (err?.message || "An unexpected error occurred."));
    } finally {
      setFormLoading(false);
    }
  };
  const handleDelayedClose = () => {
    setTimeout(() => {
      setShowLogIn(false);
    }, 3000);
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
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={formLoading}
            />
          )}
          <input
            type="text"
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            disabled={formLoading}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={formLoading}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={formLoading}
          />
        </div>

        <div className="btn">
          <button
            type="submit"
            disabled={formLoading}
            onClick={handleDelayedClose}
          >
            {formLoading
              ? currentState === "Sign Up"
                ? "Creating Account..."
                : "Logging In..."
              : currentState === "Sign Up"
              ? "Create Account"
              : "Login"}
          </button>
        </div>

        <div className="login-popup-condition">
          <input type="checkbox" required disabled={formLoading} />
          <p>I agree to the terms and conditions.</p>
        </div>

        {currentState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span onClick={() => !formLoading && setCurrentState("Sign Up")}>
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Already have an Account?{" "}
            <span onClick={() => !formLoading && setCurrentState("Login")}>
              Login Here
            </span>
          </p>
        )}
      </form>

      {showSuccessPopup && (
        <div className="success-popup">{successMessage}</div>
      )}
    </div>
  );
};

export default Login;
