import React, { useState, useEffect } from "react";
import "./Login.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const auth = JSON.parse(localStorage.getItem("blinks-user"));

  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("password should have atleast 6 characters");
    } else if (name !== " " && password !== "") {
      {
        dispatch(login({ username: name, password }));
        window.localStorage.setItem(
          "blinks-user",
          JSON.stringify({ username: name, password })
        );
        navigate("/home");
      }
    } else {
      alert("Please enter all the details");
    }
  };

  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="card">
            <h2 className="title">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="signup__inputContainer">
                <input
                  placeholder="Enter Your Username"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="signup__button" onSubmit={handleLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
