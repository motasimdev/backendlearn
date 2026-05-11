function testMiddlewere(req, res, next) {
//   console.log(req.headers);

  if (req.headers.authorization == 12345) {
    next();
  } else res.send("vulll");

  //   console.log(req.headers.authorization);
}

module.exports = testMiddlewere;
