import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import { NavbarContext } from "../context/HandleNavContext";

export default function Layout() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <NavbarContext.Provider value={{ showNav, setShowNav }}>
        <Navbar />
      </NavbarContext.Provider>
      <Outlet />
      <Footer />
    </>
  );
}
