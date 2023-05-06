const Comment = require("../models/Comment");

module.exports = {
  createPost: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.post.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  }
};
