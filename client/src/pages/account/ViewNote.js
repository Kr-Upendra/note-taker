import CloseBtn from "../../components/CloseBtn";
import "./noteCss/ViewNote.css";
import { useParams } from "react-router-dom";
import { NoteUrl } from "../../utils/Urls";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import NoteDetails from "./NoteDetails";

export default function ViewNote() {
  const [note, setNote] = useState({});
  const { id } = useParams();
  const [cookie] = useCookies(["access_token"]);

  useEffect(() => {
    const getNote = async () => {
      try {
        const response = await axios.get(NoteUrl + id, {
          headers: { Authorization: "Bearer " + cookie.access_token },
        });
        setNote(response.data.doc.note);
      } catch (err) {
        alert(err.response.data.message || "some error occurred");
      }
    };

    if (cookie.access_token) getNote();
  }, [cookie.access_token, id]);

  return (
    <div className="noteform">
      <div className="noteform__box">
        <CloseBtn />
        <h1>Your Note Details</h1>
        {Object.keys(note).length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <NoteDetails {...note} />
        )}
      </div>
    </div>
  );
}
