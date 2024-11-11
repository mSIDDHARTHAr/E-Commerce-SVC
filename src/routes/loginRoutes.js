const express = require('express');
const logInController = require("../controllers/logInController");
const authMiddleware = require('../middlewares/authMiddleware');


const router = express.Router();


router.route("/").post(logInController.loginUser);
module.exports = router;