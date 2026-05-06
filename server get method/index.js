const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req)
  if (req.method == "GET" && req.url == '/product') {
    res.end("this is get product");
  }else res.end('this is not get product')

  // res.write('<h1>Bismillahir Rahmanir Rahim, </h1>')
  // res.end()
});
server.listen(5000, () => {
  console.log("server start");
});
