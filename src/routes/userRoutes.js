const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .route('/')
  .post(userController.createUser)
  .get(authMiddleware , userController.getAllUsers );

router.route("/tokens").get(
    authMiddleware , userController.getUserByToken
  );
router
  .route('/:id')
  .get(authMiddleware , userController.getUserById )
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
