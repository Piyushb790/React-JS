import { useState, useEffect } from "react";
import { logoSrc } from "../utils/constants";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import cart from "../Assets/cart.png";
const Header = () => {
  const [btnName, setBtnName] = useState("login");

  useEffect(() => {}, []);
  // when i put something into [] dependency array then everytime dependency updated useEffect also called
  const online = useIsOnline();

  return (
    <div className="flex justify-between items-center  p-2 bg-babypink shadow-md font-bold ">
      <div>
        <img width="64" height="64" src={logoSrc} alt="logo " />
      </div>
      <div className="nav gap-24 flex">
        <ul className="flex gap-10 text-xl">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About Us</li>
          </Link>
          <Link to="/Contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul className="flex gap-3 items-center text-lg">
          <Link to="/cart">
            <li>
              <img src={cart} className="w-10" />
            </li>
          </Link>

          <li>
            <button
              className="border-2 p-1 border-crimson rounded-md"
              onClick={() => {
                btnName === "login"
                  ? setBtnName("logout")
                  : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
          <div>Status: {online ? "🟢" : "🔴"}</div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
