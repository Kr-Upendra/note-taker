import { Link } from "react-router-dom";
import "./navCss/NavbarLinks.css";

export default function NavbarLinks() {
  return (
    <div className="navbarLinks">
      <div className="navbarLinks__menu">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="navbarLinks__linkbox">
        <Link className="el-nav-links">Home</Link>
        <Link className="el-nav-links">About</Link>
        <Link className="el-nav-links">Sign in</Link>
      </div>
    </div>
  );
}
