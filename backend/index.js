import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/Books.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();
app.use(cors());
//middleware for handling CORS policy
//app.use(
////  cors({
// //   origin: "http://localhost:5173",
//    methods: ["GET", "POST", "PUT", "DELETE"],
//    allowHeaders: ["Content-Type"],
//  })
//);

// Middleware for parsing request body
app.use(express.json());
app.use("/books", booksRoute);

//mongoDB connection
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome To MERN Stack Tutorial");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to daabase");
    app.listen(PORT, () => {
      console.log(`Backend runing on port  ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
