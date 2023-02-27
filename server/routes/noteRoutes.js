const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notesController');

//////////////

router
  .route('/')
  .get(notesController.getAllNotes)
  .post(notesController.createNote);

router
  .route('/:id')
  .get(notesController.getNote)
  .delete(notesController.deleteNote)
  .patch(notesController.updateNote);

//////////////

module.exports = router;
