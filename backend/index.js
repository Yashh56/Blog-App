const express = require("express");
const app = express();
const env = require("dotenv").config();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");

// DB Connection
const mongoose = require("mongoose");

const DB_CONNECT = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors({ origin: "https://blog-app-r8cf.onrender.com", credentials: true }));
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

app.listen(process.env.PORT, DB_CONNECT(), () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
