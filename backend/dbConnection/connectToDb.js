import mongoose from "mongoose";

const connectToDb = async (db) => {
  try {
    const res = await mongoose.connect(db);
    if (res.connection.readyState === 1)
      console.log("mongo connected successfully!");
    else
      console.error(
        "mongo connection is in an unexpected state",
        res.connection.readyState
      );
  } catch (err) {
    console.error("MONGO CONNECTION FAILED!");
    console.error(err);
  }
};

export { connectToDb };
