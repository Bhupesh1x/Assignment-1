import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useSelector } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginUser = useSelector((state) => state.auth.value);
  const initialValue = {
    username: "",
    password: "",
  };

  const handleLogout = () => {
    localStorage.removeItem("blinks-user");
    dispatch(login(initialValue));
    navigate("/");
  };
  return (
    <div className="nav">
      <div>
        <h4 className="nav__title">Binks Assignment</h4>
      </div>
      <ul>
        <>
          <li style={{ paddingRight: "20px" }}>{LoginUser.username}</li>
          <li onClick={handleLogout}>Logout</li>
        </>
      </ul>
    </div>
  );
};

export default Nav;
