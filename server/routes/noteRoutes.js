const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

const notesController = require('../controllers/notesController');

////////////// ONLY ADMIN ACCESS
router.use(authController.protect, authController.restrictTo('admin'));

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
