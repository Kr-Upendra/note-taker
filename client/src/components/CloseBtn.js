import { Link } from "react-router-dom";

export default function CloseBtn() {
  return (
    <Link to="/account/notes" className="close__form">
      <i className="fa-solid fa-xmark"></i>
    </Link>
  );
}
