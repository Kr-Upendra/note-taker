import { Link } from "react-router-dom";

export default function NavbarLogo() {
  return (
    <Link to="/" className="navbar__logo">
      Note Taker
      <i className="fa-solid fa-file-pen el-pen"></i>
    </Link>
  );
}
