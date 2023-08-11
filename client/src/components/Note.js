import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

export default function Note(props) {
  const { _id: id, title, description, tags, createdAt } = props;

  return (
    <div className="notes__note">
      <div className="notes__note--titlebox">
        <h2 className="el-title">{title.substring(0, 30)}</h2>
      </div>
      <div className="notes__note--description">
        <p className="el-desc">{description.substring(0, 90)}</p>
      </div>
      <div className="notes__note--details">
        <div className="notes__note--details-tags">
          <span className="el-tag">{tags[0]}</span>
          <span className="el-tag">{tags[1]}</span>
          {tags[2] && <span className="el-tag">{tags[2]}</span>}
        </div>
        <div className="notes__note--details-date">
          <span className="el-date">{formatDate(createdAt)}</span>
        </div>
      </div>
      <div className="notes__note--operations">
        <Link to={`update-note/${id}`}>
          <i itemProp="edit" className="el-bt fa-solid fa-pen-to-square"></i>
        </Link>
        <i itemProp="delete" className="el-bt fa-solid fa-trash"></i>
        <i itemProp="view" className="el-bt fa-solid fa-eye"></i>
      </div>
    </div>
  );
}
