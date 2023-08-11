import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import axios from "axios";
import { NoteUrl } from "../utils/Urls";
import { useCookies } from "react-cookie";

export default function Note(props) {
  const { _id: id, title, description, tags, createdAt } = props;
  const [cookie] = useCookies(["access_token"]);

  const deleteNote = async () => {
    try {
      const response = await axios.delete(NoteUrl + id, {
        headers: { Authorization: "Bearer " + cookie.access_token },
      });
      if (response.status === 204) {
        alert("Note deleted successfully!");
      }
    } catch (err) {
      alert(err.response.data.message || "some error occured");
    }
  };

  return (
    <div className="notes__note">
      <div className="notes__note--titlebox">
        <h2 className="el-title">{title}</h2>
      </div>
      <div className="notes__note--description">
        <p className="el-desc">{description.substring(0, 90)}</p>
      </div>
      <div className="notes__note--details">
        <div className="notes__note--details-tags">
          <span className="el-tag">{tags[0]}</span>
          <span className="el-tag">{tags[1]}</span>
        </div>
        <div className="notes__note--details-date">
          <span className="el-date">{formatDate(createdAt)}</span>
        </div>
      </div>
      <div className="notes__note--operations">
        <Link to={`update-note/${id}`}>
          <i itemProp="edit" className="el-bt fa-solid fa-pen-to-square"></i>
        </Link>
        <i
          onClick={deleteNote}
          itemProp="delete"
          className="el-bt fa-solid fa-trash"
        ></i>
        <Link to={`view-note/${id}`}>
          <i itemProp="view" className="el-bt fa-solid fa-eye"></i>
        </Link>
      </div>
    </div>
  );
}
