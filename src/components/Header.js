import { useState } from "react";
import { logoSrc } from "../utils/constants.js";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  console.log("whole header render");

  return (
    <div className="header">
      <div>
        <img width="64" height="64" src={logoSrc} alt="logo " />
      </div>
      <div className="nav">
        <ul className="links">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
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
