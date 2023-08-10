import { useContext } from "react";
import "./navCss/NavbarUser.css";
import { NavbarContext } from "../../context/HandleNavContext";
import { useCookies } from "react-cookie";

export default function NavbarUser() {
  const { showNav, setShowNav } = useContext(NavbarContext);
  const [, setCookie] = useCookies(["access_token"]);

  const handleNavbar = () => {
    setShowNav((prevValue) => !prevValue);
  };

  const handleLogout = () => {
    setCookie("access_token", "");
    localStorage.removeItem("currentUser");
  };

  return (
    <div className="navbar__account">
      <span className="navbar__account--username">
        Hello {localStorage.getItem("currentUser").split(" ")[0]}
      </span>
      <div className="navbar__account--box" onClick={handleNavbar}>
        <img
          className="navbar__account--box-photo"
          src="./default.png"
          alt="User"
        />
        <i className="el-down fa-solid fa-caret-down"></i>
      </div>
      <div
        aria-hidden={showNav}
        className="navbar__account--options short__navbar"
      >
        <button className="navbar__account--options-item">Your Profile</button>
        <button className="navbar__account--options-item">
          Update Profile
        </button>
        <button className="navbar__account--options-item">Memebership</button>
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
