const express = require("express");
const port = 3001;
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullname;
  const email = req.body.email;
  const password = req.body.password;
  res.send(`your name is ${fullName}, your email id ${email} , your password is ${password}`);
});

app.listen(port, () => {
  console.log(`server is runnig at http://localhost:${port}`);
});
