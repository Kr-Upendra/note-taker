import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthUrl } from "../../utils/Urls";

export default function Signup() {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${AuthUrl}signup`, formDetails);

      if (response.data.status === "success") {
        alert("You are signed up. Kindly You can login now!");
        navigate("/auth/login");
      }
    } catch (err) {
      err.response.data
        ? alert(err.response.data.message)
        : alert("SOME ERROR OCCURED!");
    }
  };

  return (
    <div className="container__item">
      <div className="container__item--heading">
        <h3 className="el-container-heading">Signup to Start the things</h3>
      </div>
      <form onSubmit={createUser} className="form">
        <div className="form__inputbox">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="form__inputbox--input"
            required
            autoComplete="off"
            autoFocus
            onChange={handleInputs}
          />
        </div>
        <div className="form__inputbox">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="form__inputbox--input"
            required
            autoComplete="off"
            onChange={handleInputs}
          />
        </div>
        <div className="form__inputbox">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create Your Password"
            className="form__inputbox--input"
            required
            autoComplete="off"
            onChange={handleInputs}
          />
        </div>
        <div className="form__btnbox">
          <button type="submit" className="form__btnbox--submit">
            Sign up
          </button>
        </div>
        <div className="style"></div>
      </form>
      <div className="container__item--extra">
        <span className="el-info">
          Already Have an Account?
          <Link to="/auth/login">Sign in</Link>
        </span>
      </div>
    </div>
  );
}
