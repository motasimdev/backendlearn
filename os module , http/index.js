const os = require("os");
const http = require("http");

// console.log(os.arch())

console.log(http);

const server = http.createServer((req, res) => {
  res.end('<h1 style="color:green">Bismillah</h1>');
});
server.listen(3444, "localhost", () => {
  console.log("server start");
});
