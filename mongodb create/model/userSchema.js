const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  number: Number,
});

module.exports = mongoose.model("userList", userSchema);
