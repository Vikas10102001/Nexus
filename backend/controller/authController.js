const User = require("../model/User");
const jwt = require("jsonwebtoken");
const {promisify} = require("util");
const catchAsync = require("../utils/catchAsync");

const createToken = (data, statusCode, res) => {
  const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.cookie("jwt", token, {
    expiresIn: Date.now() + process.env.COOKIE_EXPIRES_IN,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
  });
  data.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data,
  });
};
exports.signUp = catchAsync(async (req, res, next) => {
  const data = await User.create(req.body);
  console.log(data);
  createToken(data, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body.data);
  if (!email || !password)
    return next(new Error("Please provide email or password"));
  const user = await User.findOne({ email: email }).select("+password");
  if (!user || !(await user.correctPassword(user.password, password)))
    return next(new Error("Incorrect password or username"));

  createToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else token = req.cookie.jwt;

  if (!token) return next(new Error("Please login to get access"));

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);

  if (!currentUser)
    return next(new Error("The user belonging to this token does not exist"));

  req.user=currentUser;
  next()
});
