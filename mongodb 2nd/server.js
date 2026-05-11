//password hashing,

const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/userSchema");
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mern2407:motasim@cluster0.yinvml1.mongodb.net/mern2407?appName=Cluster0",
  )
  .then(console.log("connect"));

app.post("/user", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10, function (err, hash) {
    // if (err) {
    //   console.error(err);
    //   return;
    // }
    console.log(hash);
    const user = new User({
      name: name,
      email: email,
      password: hash,
    });
    user.save();
  });
  res.send("data gese");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
