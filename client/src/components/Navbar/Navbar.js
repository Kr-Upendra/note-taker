// eslint-disable-next-line
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarUser from "./NavbarUser";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookie] = useCookies(["access_token"]);

  return (
    <nav className="navbar">
      <NavbarLogo />
      {cookie.access_token ? <NavbarUser /> : <NavbarLinks />}
    </nav>
  );
};

export default Navbar;
