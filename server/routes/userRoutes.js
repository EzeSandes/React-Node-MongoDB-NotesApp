const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

////////////// SIGNUP - LOGIN

router.post('/signup', (req, res, next) => {
  console.log('SIGNUP');

  res.status(200).json({
    message: 'SIGNUP',
  });
});

//////////////

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

//////////////

module.exports = router;
