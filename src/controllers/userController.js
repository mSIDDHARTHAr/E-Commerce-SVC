// const userService = require('../services/userService');
// import userService from "../services/userService";
const userService = require("../services/userService");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const createResponseModel = require("../utils/responseModel");

/**
 * @desc    Create a new user
 * @route   POST /api/users
 * @access  Public
 */
const createUser = async (req, res, next) => {
  try {
    const payload = { ...req.body };
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(payload.password, salt);
    const IsPresent = await User.finfOne({ email });
    if (IsPresent) {
      res
        .status(409)
        .json(createResponseModel(409, "Email Already Exist!", {}));
      return;
    }
    const User = {
      ...payload,
      password: hashedPassword,
    };
    const user = await userService.createUser(User);
    res
      .status(201)
      .json(createResponseModel(200, "User Created Succefully", user));
  } catch (error) {
    next(error);
  }
};

const getUserByToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization").split(" ")[1];
    let user = await userService.getUserByToken(token);
    if (user) {
      let UserDetails = await userService.getUserByUserName(user.username);
      if (UserDetails) {
        res.status(200).json(UserDetails);
      }
    }else{
      res.status(500).json(createResponseModel(500 , "User Not Found" , {}))
    }

  } catch (error) {
    next(error)
  }
};

/**
 * @desc    Get all users
 * @route   GET /api/users
 * @access  Public
 */
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(createResponseModel(200, "Succeful", users));
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single user
 * @route   GET /api/users/:id
 * @access  Public
 */
const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update user
 * @route   PUT /api/users/:id
 * @access  Public
 */
const updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete user
 * @route   DELETE /api/users/:id
 * @access  Public
 */
const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByToken,
};
