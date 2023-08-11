import "./noteCss/AddNote.css";
import { useNavigate } from "react-router-dom";
import { NoteUrl } from "../../utils/Urls";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState } from "react";
import CloseBtn from "../../components/CloseBtn";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagEl, setTagEl] = useState("");
  const [cookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const tags = tagEl.split(", ");

  const addNote = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        NoteUrl,
        {
          title,
          description,
          tags,
        },
        { headers: { Authorization: "Bearer " + cookie.access_token } }
      );
      if (response.data.status === "success") {
        alert("New Note added");
        navigate("/account/notes");
      }
    } catch (e) {
      alert(e.response.data.message || "some error occured");
    }
  };

  return (
    <div className="noteform">
      <div className="noteform__box">
        <CloseBtn />
        <h1>Add Note</h1>
        <form onSubmit={addNote} className="forms">
          <div className="forms__items">
            <label htmlFor="title" className="forms__items--label">
              Title
            </label>
            <input
              type="text"
              className="forms__items--input"
              placeholder="Note Title..."
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="forms__items">
            <label htmlFor="desc" className="forms__items--label">
              Description
            </label>
            <textarea
              name="desc"
              rows="5"
              className="forms__items--textarea"
              placeholder="Your Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="forms__items">
            <label htmlFor="tags" className="forms__items--label">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              required
              placeholder="eg: Play, Dream"
              className="forms__items--input"
              onChange={(e) => setTagEl(e.target.value)}
            />
          </div>
          <div className="forms__items btn-box">
            <button type="submit" className="forms__items--subbtn">
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
