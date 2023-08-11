import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectToDb } from "./dbConnection/connectToDb.js";

const port = process.env.PORT;

const database = process.env.DATABASE.replace(
  "<password>",
  process.env.PASSWORD
);

connectToDb(database);
app.listen(port, () => {
  console.log("server started at " + port);
});
