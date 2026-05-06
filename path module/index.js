const path = require("path");

// const filename = path.parse("/users/docs/motasim.txt");
// const finalExtension = filename.ext;
// console.log(finalExtention);

// console.log(path.extname('index.html'))
// console.log(__filename)

// const y = path.join(__dirname, 'motasim', 'sirrr', 'eiiiii tomra kmn assoo');
// console.log('Config file path:', y);

// console.log(path.resolve('file.txt'));

// console.log(path.normalize('/users/./docs/../data/file.txt'));

// const pathString2 = path.format({
//   root: "/",
//   dir: "/users/docs",
//   name: "file",
//   ext: ".txt",
// });
// console.log(pathString2);

// console.log(path.normalize('/users//docs////file.txt'));

// console.log(path.relative('/users/docs/file.txt', '/users/images/photo.jpg'));
console.log(path.relative('/users/docs/file.txt', '/users/docs/file.txt'));