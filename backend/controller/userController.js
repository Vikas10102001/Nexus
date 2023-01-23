const User = require("../model/User");
const catchAsync = require("../utils/catchAsync");

//getUser
exports.getUser = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    users,
  });
});
//follow User
exports.followUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user.followings.includes(req.params.userId)) {
    return res
      .status(400)
      .json({ status: "failed", message: "You already follow him" });
  }
  await User.findByIdAndUpdate(req.user.id, {
    followings: [...user.followings, req.params.userId],
  });
  res.status(201).json({
    status: "success",
  });
});

//unfollow a user
exports.unfollowUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user.followings.includes(req.params.userId)) {
    res.status(400).json({
      status: "failed",
      message: "You do not follow this user",
    });
  }
});
