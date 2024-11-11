// import User from "../models/userModel.js";
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

/**
 * Create a new user
 * @param {Object} userData
 * @returns {Promise<User>}
 */
const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

/**
 * Get all users
 * @returns {Promise<User[]>}
 */
const getAllUsers = async () => {
  const users = await User.find().select('-password'); // Exclude password
  return users;
};

/**
 * 
 * @param {JWT token} token 
 * @return {Promise<User>}
 */
const getUserByToken = async (token) =>{
  let user = jwt.verify(token , process.env.JWT_SECRET);
  return user;
}

/**
 * 
 * @param {String} username 
 * @returns {Promise<User>}
 */
const getUserByUserName = async (username) =>{
  let user = User.findOne({username});
  return user;
}

/**
 * Get user by ID
 * @param {String} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  const user = await User.findById(id).select('-password');
  return user;
};

/**
 * Update user by ID
 * @param {String} id
 * @param {Object} updateData
 * @returns {Promise<User>}
 */
const updateUser = async (id, updateData) => {
  const user = await User.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  }).select('-password');
  return user;
};

/**
 * Delete user by ID
 * @param {String} id
 * @returns {Promise}
 */
const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByToken,
  getUserByUserName
};
