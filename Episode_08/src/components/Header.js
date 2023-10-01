import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  //   let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header Rendered");

  // id there is no dependency array => then useEffect is called on every render of the component.
  /*
  useEffect(() => {
    console.log("useEffect Called.");
  });
  */

  // if dependency array is empty = [] => then useEffect is called on initial render just once.

  useEffect(() => {
    // console.log("UseEffect called.");
  }, []);

  // if dependencyarray has any value => then useEffect is called only when the dependency changes.
  /*
  useEffect(() => {
    console.log("useEffect called.");
  }, [btnName]);
  */

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} width="150px" height="100px" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
