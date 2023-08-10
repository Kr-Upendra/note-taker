import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container__item">
      <div className="container__item--heading">
        <h3 className="el-container-heading">Sign in access your memories</h3>
      </div>
      <form className="form">
        <div className="form__inputbox">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="form__inputbox--input"
            required
            autoComplete="off"
            autoFocus
          />
        </div>
        <div className="form__inputbox">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="form__inputbox--input"
            required
            autoComplete="off"
          />
        </div>
        <div className="form__forgotpassword">
          <span className="el-info">
            Forgot Your Password?
            <a href="/">Reset Now</a>
          </span>
        </div>
        <div className="form__btnbox">
          <button type="submit" className="form__btnbox--submit">
            Sign in
          </button>
        </div>
        <div className="style"></div>
      </form>
      <div className="container__item--extra">
        <span className="el-info">
          Don't have an account?
          <Link to="/auth/signup">Sign up</Link>
        </span>
      </div>
    </div>
  );
}

/*

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:4040/api/users/login",
        {
          email,
          password,
        }
      );
      if (response.data.status === "success") {
        setCookie("access_token", response.data.token);
        window.localStorage.setItem("currentUser", response.data.name);
        alert("You are logged in!");
        navigate("/account");
      }
    } catch (err) {
      console.error(err);
      err.response.data
        ? alert(err.response.data.message)
        : alert("some error occuered!");
    }
  };

*/
