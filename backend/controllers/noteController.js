import Note from "../models/NoteModel.js";

const getAllNote = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.userId });
    res.status(200).json({
      status: "success",
      result: notes.length,
      doc: { notes },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const getNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);

    if (!note)
      return res.status(404).json({
        status: "fail",
        message: "note not found with given ID!",
      });

    res.status(200).json({
      status: "success",
      doc: { note },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const createNote = async (req, res) => {
  try {
    const note = await Note.create({
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      userId: req.user.userId,
    });

    res.status(201).json({
      status: "success",
      message: "New note created!",
      doc: { note },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!note)
      return res.status(404).json({
        status: "fail",
        message: "note not found with given ID!",
      });

    res.status(200).json({
      status: "success",
      message: "note updated successfully!",
      doc: { note },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note)
      return res.status(404).json({
        status: "fail",
        message: "note not found  with given ID!",
      });

    res.status(204).json({
      status: "success",
      message: "note deleted successfully!",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

export default { getAllNote, createNote, updateNote, deleteNote, getNote };
