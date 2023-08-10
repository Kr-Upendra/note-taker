import { Link } from "react-router-dom";

export default function UpdateNote() {
  return (
    <div className="noteform">
      <div className="noteform__box">
        <Link to="/account/notes" className="close__form">
          <i className="fa-solid fa-xmark"></i>
        </Link>
        <h1>Update Your Note</h1>
        <form className="forms">
          <div className="forms__items">
            <label htmlFor="title" className="forms__items--label">
              Title
            </label>
            <input
              type="text"
              className="forms__items--input"
              placeholder="Note Title..."
              required
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
