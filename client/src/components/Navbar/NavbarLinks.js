import { Link } from "react-router-dom";
import "./navCss/NavbarLinks.css";
import { useContext } from "react";
import { NavbarContext } from "../../context/HandleNavContext";

export default function NavbarLinks() {
  const { showNav, setShowNav } = useContext(NavbarContext);

  const handleNavbarLinks = () => {
    setShowNav((prevValue) => !prevValue);
  };

  return (
    <div className="navbarLinks">
      <div onClick={handleNavbarLinks} className="navbarLinks__menu">
        <i className={`fa-solid fa-${!showNav ? "bars" : "xmark"}`}></i>
      </div>
      <div className="navbarLinks__linkbox" aria-hidden={showNav}>
        <Link onClick={handleNavbarLinks} to="/" className="el-nav-links">
          Home
        </Link>
        <Link
          onClick={handleNavbarLinks}
          to="/membership"
          className="el-nav-links"
        >
          Pricing
        </Link>
        <Link onClick={handleNavbarLinks} to="/about" className="el-nav-links">
          About
        </Link>
        <Link
          onClick={handleNavbarLinks}
          to="/auth/signup"
          className="el-nav-links"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
