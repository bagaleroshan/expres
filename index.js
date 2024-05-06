import express, { json } from "express";
import connectToMongoDB from "./src/connectDB/connectToMongoDB.js";
import { port } from "./src/constant.js";

let expressApp = express();
expressApp.use(json());
connectToMongoDB();
expressApp.listen(port, () => {
  console.log(`app is listening at port ${port}.`);
});
