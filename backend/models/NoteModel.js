import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please give a title of your note!"],
    minLength: [3, "title must be greater than 3 characters!"],
  },
  description: {
    type: String,
    required: [true, "please write something in desciption!"],
    minLength: [20, "description should be at least 20 characters!"],
  },
  tags: {
    type: [String],
    required: [true, "please give some tags to your note!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "note should be created by logged in users"],
  },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
