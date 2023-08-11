import { useContext } from "react";
import "./navCss/NavbarUser.css";
import { NavbarContext } from "../../context/HandleNavContext";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarUser() {
  const { showNav, setShowNav } = useContext(NavbarContext);
  const [, setCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleNavbar = () => {
    setShowNav((prevValue) => !prevValue);
  };

  const handleLogout = () => {
    handleNavbar();
    setCookie("access_token", "");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="navbar__account">
      <span className="navbar__account--username">
        Hello {localStorage.getItem("currentUser").split(" ")[0]}
      </span>
      <div className="navbar__account--box" onClick={handleNavbar}>
        <img
          className="navbar__account--box-photo"
          src="/default.png"
          alt="User Name"
        />
        <i className="el-down fa-solid fa-caret-down"></i>
      </div>
      <div
        aria-hidden={showNav}
        className="navbar__account--options short__navbar"
      >
        <Link
          onClick={handleNavbar}
          to="/account"
          className="navbar__account--options-item"
        >
          Your Profile
        </Link>
        <Link
          onClick={handleNavbar}
          to="/account/notes"
          className="navbar__account--options-item"
        >
          Your Notes
        </Link>
        <Link
          onClick={handleNavbar}
          to="/account/update-profile"
          className="navbar__account--options-item"
        >
          Update Profile
        </Link>
        <Link
          onClick={handleNavbar}
          to="/account/membership"
          className="navbar__account--options-item"
        >
          Memebership
        </Link>
        <button
          className="navbar__account--options-item"
          onClick={handleLogout}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
