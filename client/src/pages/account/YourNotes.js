import Note from "../../components/Note";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./noteCss/YourNote.css";
import { useCookies } from "react-cookie";
import { NoteUrl } from "../../utils/Urls";

export default function YourNotes() {
  const [showNav, setShowNav] = useState(true);
  const [cookie] = useCookies(["access-token"]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get(NoteUrl, {
          headers: { Authorization: "Bearer " + cookie.access_token },
        });
        setNotes(response.data.doc.notes);
      } catch (err) {
        console.error(err);
        alert(err.response.data.message || "some error occured");
      }
    };

    getNotes();
  }, []);

  const noteElements = notes.map((note) => {
    return <Note key={note._id} {...note} />;
  });

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
        <Link
          onClick={() => setShowNav((prevValue) => !prevValue)}
          to="addnote"
        >
          Add Note
        </Link>
        <Link
          onClick={() => setShowNav((prevValue) => !prevValue)}
          to="get-stats"
        >
          Get Stats
        </Link>
      </div>
      <div className="notes">{noteElements}</div>
    </div>
  );
}
