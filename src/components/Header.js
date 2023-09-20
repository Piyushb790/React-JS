import { logoSrc } from "../utils/constants.js";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
