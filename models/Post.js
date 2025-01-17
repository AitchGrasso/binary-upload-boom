const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date, //Expected output: "Fri, 02 Feb 1996 03:04:05 GMT"
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema); //model is called post, will make name into plural "Ox" => Oxen
