import User from "../models/userModel.js";

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      result: users.length,
      doc: { users },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user)
      return res.status(404).json({
        status: "fail",
        message: "user not found  with given ID!",
      });

    res.status(204).json({
      status: "success",
      message: "user deleted successfully!",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

export default { getAllUser, deleteUser };
