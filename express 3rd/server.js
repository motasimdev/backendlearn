const express = require("express");
const mongoose = require("mongoose");
const userList = require("./model/userSchema.js");
const app = express();
const port = 3000;
app.use(express.json());

try {
  mongoose.connect(
    "mongodb+srv://mern2407:motasim@cluster0.ptmdayy.mongodb.net/userinfo?appName=Cluster0",
  );
  console.log("connected");
} catch (error) {
  handleError(error);
}
mongoose
  .connect(
    "mongodb+srv://mern2407:motasim@cluster0.ptmdayy.mongodb.net/userinfo?appName=Cluster0",
  )
  .then(() => console.log("Connected!"));

app.post("/user", (req, res) => {
  const { name, email, number } = req.body;
  console.log(name, email, number);
  const user = new userList({
    name: name,
    email: email,
    number: number,
  });
  user.save();
  res.send("data gese?");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
