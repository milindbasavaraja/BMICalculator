const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/bmicalculator", (req, res) => {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  console.log("Weight is" + weight);
  console.log("Height is" + height);
  var bmi = weight / (height * height);

  res.send("The bmi is " + bmi);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
