import React, { useEffect } from "react";
import Login from "./auth/Login";
import Home from "./components/Home";
import UserDetail from "./components/UserDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice";
import PrivateComponent from "./components/PrivateComponent";

export default function App() {
  const userData = JSON.parse(localStorage.getItem("blinks-user"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      login({ username: userData?.username, password: userData?.password })
    );
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateComponent />}>
          <Route path="/home" element={<Home />} />
          <Route path="/userdetail/:userid" element={<UserDetail />} />
        </Route>
      </Routes>
    </div>
  );
}
