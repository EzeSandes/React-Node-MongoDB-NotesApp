const Note = require('../models/noteModel');

exports.getAllNotes = async function (req, res) {
  try {
    const notes = await Note.find();

    res.status(200).json({
      status: 'success',
      notes,
    });
  } catch (error) {
    console.log(error);
  }
};
