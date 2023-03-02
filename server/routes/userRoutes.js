const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const router = express.Router();
////////////// SIGNUP - LOGIN

router.post('/signup', authController.singup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.use(authController.protect);

////////////// ONLY ADMIN ACCESS

router.use(authController.restrictTo('admin'));

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
