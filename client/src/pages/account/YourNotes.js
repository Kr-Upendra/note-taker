import Note from "../../components/Note";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./noteCss/YourNote.css";

export default function YourNotes() {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="nContainer">
      <div className="nContainer__heading">
        <h1>All Your Notes</h1>
        <span
          onClick={() => setShowNav((prevValue) => !prevValue)}
          className="el-show"
        >
          Menu
        </span>
      </div>
      <div className="nContainer__btns" aria-hidden={showNav}>
        <Link to="addnote">Add Note</Link>
        <Link to="get-stats">Get Stats</Link>
      </div>

      <div className="notes">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}
