const mongoose = require('mongoose');

const noteScheema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A note must have a Title'],
      trim: true,
      minLength: [3, 'A note title must have more or equals than 3 characters'],
      maxLength: [
        30,
        'A note title must have less or equals than 30 characters',
      ],
    },
    body: {
      type: String,
      trim: true,
      maxLength: [
        100,
        'A note body must have less or equals than 50 characters',
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    lastEdit: {
      type: Date,
      default: Date.now(),
    },
    // user: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'User',
    //   required: [true, 'Note must belong to a user'],
    // },
  },
  {
    toObject: { virtuals: true },
  }
);

const Note = mongoose.model('Note', noteScheema);

module.exports = Note;
