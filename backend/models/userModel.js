import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide your name!"],
    minLength: [3, "name should be greater than 3 characters"],
  },
  email: {
    type: String,
    required: [true, "please provide an email!"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    minLength: [6, "password should be greater than 6 characters!"],
    select: false,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  const encryptedPassword = await bcrypt.hash(this.password, 12);
  this.password = encryptedPassword;
  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

export default User;
