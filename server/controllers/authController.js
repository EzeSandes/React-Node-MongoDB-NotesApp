const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const AppError = require('../utils/appError');

const signToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

exports.singup = catchAsync(async (req, res, next) => {
  // Prevent that user save whatever they want. Save only what I need.
  const newUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  // 1) Check if the password and e-mail exist in the request.
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError('Please provide an email or password', 400));

  // 2) Check if user exists and the password is correct.
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError('Incorrect password or email', 401));

  // 3) Everything OK
  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
  });
});
