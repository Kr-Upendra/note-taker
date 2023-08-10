export default function Note() {
  const title = "Hello friends my name is upendra kumar.";
  const desc =
    "I am a full stack developer. I have skills like Nodejs, Mongodb, Express for backend and to work on frontend I usually use ReactJs.";

  return (
    <div className="notes__note">
      <div className="notes__note--titlebox">
        <h2 className="el-title">{title.substring(0, 30)}</h2>
      </div>
      <div className="notes__note--description">
        <p className="el-desc">{desc.substring(0, 90)}</p>
      </div>
      <div className="notes__note--details">
        <div className="notes__note--details-tags">
          <span className="el-tag">Play</span>
          <span className="el-tag">Dream</span>
        </div>
        <div className="notes__note--details-date">
          <span className="el-date">30/07/09</span>
        </div>
      </div>
      <div className="notes__note--operations">
        <i itemProp="edit" className="el-bt fa-solid fa-pen-to-square"></i>
        <i itemProp="delete" className="el-bt fa-solid fa-trash"></i>
        <i itemProp="view" className="el-bt fa-solid fa-eye"></i>
      </div>
    </div>
  );
}
