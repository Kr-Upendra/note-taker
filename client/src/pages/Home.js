import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="el-tag">Welcome to the world of memories</h1>
        <p className="el-tagline">
          A place where you can create, save your memories without any tension.
          create once remember for ever.
        </p>
        <Link to="/auth/signup" className="el-getstarted">
          Get Started
        </Link>
      </div>
    </div>
  );
}
