const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const MIN_LENGTH_PASSWORD = 8;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'A user must have a name.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email.'],
      unique: true,
      lowercase: true,
      validate: {
        validator: validator.isEmail,
        message: 'Email validation failed.',
      },
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    password: {
      type: String,
      required: [true, 'A user must have a password'],
      minLength: MIN_LENGTH_PASSWORD,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: 'Password are not the same',
      },
      select: false,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

/*
 *************************** QUERY MIDDLEWARES
 */
userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });

  next();
});

userSchema.pre(/^save/, async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 11);

  // I only need this field for the user to confirm their password, not for the DB
  this.passwordConfirm = undefined;
});

/*
 ***************************
 */
// Docum: https://mongoosejs.com/docs/populate.html#populate-virtuals
userSchema.virtual('notes', {
  ref: 'Note',
  foreignField: 'user',
  localField: '_id',
});

const User = mongoose.model('User', userSchema);

module.exports = User;
