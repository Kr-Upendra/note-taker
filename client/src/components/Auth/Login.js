// eslint-disable-next-line
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthUrl } from "../../utils/Urls";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${AuthUrl}login`, { email, password });
      if (response.data.status === "success") {
        const { token, name } = response.data;
        setCookie("access_token", token);
        localStorage.setItem("currentUser", name);
        alert("You are logged in now!");
        navigate("/account");
      }
    } catch (err) {
      alert(
        err.response.data.message ||
          "some error occured. Please try again lator!"
      );
    }
  };

  return (
    <div className="container__item">
      <div className="container__item--heading">
        <h3 className="el-container-heading">Sign in access your memories</h3>
      </div>
      <form onSubmit={loginUser} className="form">
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
