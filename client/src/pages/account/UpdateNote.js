import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";
import axios from "axios";
import { NoteUrl } from "../../utils/Urls";
import CloseBtn from "../../components/CloseBtn";

export default function UpdateNote() {
  const { id } = useParams();
  const [cookie] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagEl, setTagEl] = useState("");

  const tags = tagEl.split(", ");

  const updateNote = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        NoteUrl + id,
        { title, description, tags },
        { headers: { Authorization: "Bearer " + cookie.access_token } }
      );
      if (response.data.status === "success") {
        alert(response.data.message);
        navigate("/account/notes");
      }
    } catch (err) {
      alert(err.response.data.message || "some error occurred");
    }
  };

  return (
    <div className="noteform">
      <div className="noteform__box">
        <CloseBtn />
        <h1>Update Your Note</h1>
        <form onSubmit={updateNote} className="forms">
          <div className="forms__items">
            <label htmlFor="title" className="forms__items--label">
              Title
            </label>
            <input
              type="text"
              className="forms__items--input"
              placeholder="Note Title..."
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
              placeholder="eg: Play, Dream"
              className="forms__items--input"
              onChange={(e) => setTagEl(e.target.value)}
            />
          </div>
          <div className="forms__items btn-box">
            <button type="submit" className="forms__items--subbtn">
              Update Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
