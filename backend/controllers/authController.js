import User from "../models/userModel.js";
import userValidationSchema from "../validation/userValidation.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";

const signup = async (req, res, next) => {
  try {
    const result = await userValidationSchema.validate(req.body);

    const isUserExist = await User.findOne({ email: result.email });

    if (isUserExist)
      return res.status(400).json({
        status: "fail",
        message: "User already exist with given email!",
      });

    await User.create(result);

    res.status(200).json({
      status: "success",
      message: "new user created!",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(404).json({
        status: "fail",
        message: "please provide valid email and password!",
      });

    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password!",
      });

    const isPasswordValid = await user.comparePassword(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password!",
      });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "10d",
    });

    res.status(200).json({
      status: "success",
      message: "You are logged in now!",
      token,
      name: user.name,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const protectRoute = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token)
    return res.status(401).json({
      status: "fail",
      message: "You are not logged! Please log in to get access!",
    });

  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  const freshUser = await User.findById(decoded.userId);

  if (!freshUser)
    return res.status(401).json({
      status: "fail",
      message: "The user belonging to this token does no longer exist",
    });

  decoded.role = freshUser.role;
  decoded.name = freshUser.name;
  req.user = decoded;

  next();
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).json({
        status: "fail",
        message: "You don't have permission to perform this action!",
      });
    next();
  };
};

export default { signup, login, protectRoute, restrictTo };
