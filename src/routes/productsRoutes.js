const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


router.route("/").post(
  authMiddleware , 
)

