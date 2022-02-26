import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addData } from "../redux/userSlice";

export default function Home() {
  const dispatch = useDispatch();

  const usersData = useSelector((state) => state.user.value);

  const getRandomUsers = async () => {
    const result = await fetch(
      "https://randomuser.me/api/0.8/?results=10"
    ).then((response) => response.json());
    dispatch(addData(result.results));
  };

  useEffect(() => {
    getRandomUsers();
  }, []);

  return (
    <div>
      <Nav />
      <div className="home">
        <h2>Users List</h2>
        {usersData.map((value, index) => (
          <Link to={"/userdetail/" + value.user.md5} key={index}>
            <h3 key={index} className="home__h3">
              <span className="home__span">{value.user.name.title}</span>
              {value.user.name.first}
              <span className="home__span">{value.user.name.last}</span>
            </h3>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
