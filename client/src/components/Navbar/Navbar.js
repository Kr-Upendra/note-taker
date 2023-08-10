import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarUser from "./NavbarUser";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarLogo />
      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
