const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   fs.readFile("largtxt.txt", "utf-8", (err, data) => {
  //     res.write(data);
  //     res.end();
  //   });

  //=========== eta standard ========
  //   const readData = fs.createReadStream("largtxt.txt", "utf-8"); //utf-8 data k string e convert krbe
  //   readData.on("data", (chunk) => {
  //     res.write(chunk);
  //   });

  //   readData.on("end", () => {
  //     res.end();
  //   });

  //   readData.on("error", (err) => {
  //     res.statusCode = 500;
  //     res.end("internal server error");
  //   });

  //=========== arektu standard =========
  const readData = fs.createReadStream("largtxt.txt", "utf-8");
  readData.pipe(res);
  readData.on("error", () => {
    res.end("file not found");
  });
});
server.listen(5000, () => {
  console.log("server start");
});
