const Mongoose = require("mongoose");
const postSchema = Mongoose.Schema(
  {
    caption: {
      type: String,
    },
    photo: {
      type: [String],
      required: [true, "A post must have a photo"],
    },
    comments: [
      {
        type: Mongoose.Schema.ObjectId,
        ref: "Comment",
      },
    ],
    user: {
      type: Mongoose.Schema.ObjectId,
      ref: "User",
    },
    Likes: [{ type: Mongoose.Schema.ObjectId, ref: "User" }],
    Hearts: [{ type: Mongoose.Schema.ObjectId, ref: "User" }],
    tags: [{ type: Mongoose.Schema.ObjectId, ref: "User" }],
  },
  {
    timeStamps: true,
  }
);

const Post = Mongoose.model("Post", postSchema);

module.exports = Post;
