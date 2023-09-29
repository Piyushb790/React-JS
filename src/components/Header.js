import { useState, useEffect } from "react";
import { logoSrc } from "../utils/constants";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  console.log("whole header render");
  useEffect(() => {
    // console.log("useEffect is Called");
  }, []);
  // when i put something into [] dependency array then everytime dependency updated useEffect also called
  const online = useIsOnline();

  return (
    <div className="header">
      <div>
        <img width="64" height="64" src={logoSrc} alt="logo " />
      </div>
      <div className="nav">
        <ul className="links">
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
          <li>Cart</li>

          <button
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <div>Online Status: {online ? "🟢" : "🔴"}</div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
