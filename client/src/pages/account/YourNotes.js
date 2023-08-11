import Note from "../../components/Note";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./noteCss/YourNote.css";
import { useCookies } from "react-cookie";
import { NoteUrl } from "../../utils/Urls";

export default function YourNotes() {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const [cookie] = useCookies(["access_token"]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get(NoteUrl, {
          headers: { Authorization: `Bearer ${cookie.access_token}` },
        });
        setNotes(response.data.doc.notes);
        setLoading(false);
      } catch (err) {
        alert(err.response.data.message || "some error occured");
      }
    };

    if (cookie.access_token) {
      getNotes();
    }
  }, [cookie.access_token]);

  const noteElements = notes.map((note) => {
    return <Note key={note._id} {...note} />;
  });

  return (
    <div className="nContainer">
      {cookie.access_token ? (
        <>
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

          {loading ? (
            <div className="notes">
              <h2>Loading...</h2>
            </div>
          ) : notes.length > 0 ? (
            <div className="notes">{noteElements}</div>
          ) : (
            <div className="notes">
              <h2>Add some notes...</h2>
            </div>
          )}
        </>
      ) : (
        <h1>You are not logged in.</h1>
      )}
    </div>
  );
}
