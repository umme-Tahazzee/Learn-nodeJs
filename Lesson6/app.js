const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
  res.statusCode = 202;
  res.sendFile(__dirname + "/views/register.html");
});

app.use("/", (req, res) => {
  res.statusCode = 202;
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
