const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const user = [
  {
    name: "motasim",
    number: 1234,
    email: "m@gmail.com",
  },
  {
    name: "masum",
    number: 1234,
    email: "m@gmail.com",
  },
  {
    name: "julku",
    number: 1234,
    email: "m@gmail.com",
  },
];

app.get("/user", (req, res) => {
  res.json(user);
});

app.post("/user", (req, res) => {
  // res.json(user);
  // res.send(user);
  const some = req.body
  console.log(some)
  res.json("ok done")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
