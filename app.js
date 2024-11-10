const express = require("express");
const app = express();
const port = 5000;

//register

app.post("/api/users/register", (req, res) => {
  res.send("register user");
});
//login
app.post("/api/users/login", (req, res) => {
  res.send("login user");
});
//check user
app.get("/api/users/check", (req, res) => {
  res.send("check user");
});

app.listen(port, (res, err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`listening to port ${port}`);
  }
});
