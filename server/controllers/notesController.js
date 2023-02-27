const Note = require('../models/noteModel');

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json({
      status: 'success',
      data: { notes },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: { note },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createNote = async (req, res) => {
  try {
    const newNote = await Note.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { newNote },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.is, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: 'success',
      data: { updatedNote },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
