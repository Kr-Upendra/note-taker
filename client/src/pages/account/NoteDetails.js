import { formatDate } from "../../utils/formatDate";

export default function NoteDetails(props) {
  const { title, description, tags, createdAt } = props;
  return (
    <div className="vNote">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="vNote__tags">
        {tags.map((tag) => {
          return (
            <span key={tag} className="el-tag">
              {tag}
            </span>
          );
        })}
      </div>
      <span className="el-date">{formatDate(createdAt)}</span>
    </div>
  );
}
