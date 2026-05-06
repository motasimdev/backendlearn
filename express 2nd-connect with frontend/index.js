const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const allUser = []

const userlist = [
  { name: "motasim", number: 123456, email: "m@gmail.com" },
  { name: "jafor", number: 123456, email: "j@gmail.com" },
  { name: "jhontu", number: 123456, email: "k@gmail.com" },
  { name: "sirrr", number: 22123456, email: "s@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("eta home express");
});
app.get("/userlist", (req, res) => {
  res.send(userlist);
});

app.post("/createUser", (req, res) => {
  console.log(req.body);
  const { name, email, number } = req.body;
  allUser.push(req.body)
  res.json("data gese");
});
app.get("/allUser", (req, res) => {
  res.json(allUser)
  res.send("data ashse");
});

app.use((req, res) => {
  res.status(404).send("ki khujen vai? ekhane kono page nai!");
});
app.listen(port, () => {
  console.log("server 5000");
});
