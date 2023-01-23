const Post = require("../model/Post");
const catchAsync = require("../utils/catchAsync");
exports.createPost = catchAsync(async () => {
  const post = await Post.create(req.body);
  res.status(201).json({
    status: "success",
    post,
  });
});
