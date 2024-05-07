const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const area = 0.5 * base * height;
  res.send(`Area of triangle is ${area}`);
});


app.post("/circle", (req, res) => {
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    console.log(radius);
    res.send(`<h2>Area of Circle is : ${area}</h2>`);
  });
  
app.listen(port, (req, res) => {
  console.log(`server is running http://localhost:${port}`);
});
