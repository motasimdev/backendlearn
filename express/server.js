const http = require("http");

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("this is the express server");
});

app.post("/about", (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  // res.send('data send')
  if (req.body.email == "m@gmail.com" && req.body.password == 1234) {
    res.send("email thikase");
  } else res.send("email thik nai");  
  // if (!name || !email || !password) {
  //   res.send("box khali");
  // } else res.send("success");
});

app.use((req, res) => {
  res.status(404).send("ki khujen vai? ekhane to page nai!");
});
app.listen(5000, () => {
  console.log("express server start");
});

// const server = http.createServer((req, res) => {
//   if (req.url == "/about") {
//     res.write("Bismillah");
//   }else {
//     res.statusCode = 404
//     res.end("ki khujen vai? ekhane to kichu nai!")
//   }
// });
// server.listen(5000, () => {
//   console.log("old server 5000");
// });
