const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date, //Expected output: "Fri, 02 Feb 1996 03:04:05 GMT"
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentSchema); //model is called post, will make name into plural "Ox" => Oxen
