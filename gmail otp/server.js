const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/userSchema");
const nodemailerFn = require("./helpers/emailconfig");
const testMiddlewere = require("./middlewere/testMiddlewere");
const app = express();
const port = 3000;

app.use(express.json());

try {
  mongoose.connect(
    "mongodb+srv://mern2407:motasim@mern2407.c7f53mh.mongodb.net/mern2407?appName=mern2407",
  );
  console.log("connect");
} catch (error) {
  handleError(error);
}
//

app.post("/user", (req, res) => {
  const { name, email, password } = req.body;
  const token = jwt.sign({ id: email }, "motasim");

  bcrypt.hash(password, 10, function (err, hash) {
    const user = new User({
      name: name,
      email: email,
      password: hash,
      token: token,
    });
    user.save();
    nodemailerFn(email);
    res.send("data gese");
    console.log(token);
  });
});

app.get("/user", testMiddlewere, async (req, res) => {
  const user = await User.find({});
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
