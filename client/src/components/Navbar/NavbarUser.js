import { useContext } from "react";
import "./navCss/NavbarUser.css";
import { NavbarContext } from "../../context/HandleNavContext";

export default function NavbarUser() {
  const { showNav, setShowNav } = useContext(NavbarContext);

  const handleNavbar = () => {
    setShowNav((prevValue) => !prevValue);
  };

  return (
    <div className="navbar__account">
      <span className="navbar__account--username">Hello Upendra</span>
      <div className="navbar__account--box" onClick={handleNavbar}>
        <img
          className="navbar__account--box-photo"
          src="./default.png"
          alt="User Photo"
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
        <button className="navbar__account--options-item">Sign out</button>
      </div>
    </div>
  );
}
