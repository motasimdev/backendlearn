const mongoose = require("mongoose");
const { Schema } = mongoose;

const motasimSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Motasim", motasimSchema);
