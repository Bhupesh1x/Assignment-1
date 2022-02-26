import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./UserDetail.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

function UserDetail() {
  const usersData = useSelector((state) => state.user.value);
  const { userid } = useParams();
  const [canSeeDetails, setCanSeeDetails] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const LoginUser = useSelector((state) => state.auth.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValue = {
    username: "",
    password: "",
  };

  useEffect(() => {
    setCanSeeDetails(false);
  }, []);

  const handleLoginForUser = (e) => {
    e.preventDefault();
    if (name === LoginUser.username && password === LoginUser.password) {
      setCanSeeDetails(!canSeeDetails);
    } else {
      alert("Details are incorrect can't see the details page");
      localStorage.removeItem("blinks-user");
      dispatch(login(initialValue));
      navigate("/");
    }
  };

  return (
    <div>
      <Nav />

      {!canSeeDetails ? (
        <div className="signup">
          <div className="container">
            <div className="card">
              <h2 className="title">Login To See User Details</h2>
              <form onSubmit={handleLoginForUser}>
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
                <button
                  className="signup__button"
                  onSubmit={handleLoginForUser}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="userDetail">
          <h2>Users Details</h2>
          {usersData.map((value, index) => {
            return (
              value.user.md5 === userid && (
                <div className="userDetails__data" key={index}>
                  <img
                    src={value.user.picture.thumbnail}
                    alt="user__image"
                    className="userDetails__image"
                  />
                  <p>
                    {" "}
                    Name -{" "}
                    <span className="userDetails__dataSpan">
                      {value.user.name.title}
                    </span>
                    {value.user.name.first}
                    <span className="userDetails__dataSpan2">
                      {value.user.name.last}
                    </span>
                  </p>
                  <p>Gender - {value.user.gender}</p>
                  <p>Email Address - {value.user.email}</p>
                </div>
              )
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default UserDetail;
