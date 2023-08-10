import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectToDb } from "./dbConnection/connectToDb.js";

const port = process.env.PORT;

connectToDb(process.env.DATABASE);
app.listen(port, () => {
  console.log("server started at http://127.0.0.1:" + port);
});
