// src/models/userModel.js
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    firstName:{
      type:String,
      required:true
    } ,
    lastName:{
      type:String,
      required:true
    },
    role:{
      type:String,
      required:true,
      default:"CUSTOMER"
    },
    monile:{
      type:String
    },
    address:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Address"
    }],
    paymentInformation:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Payment_information"
    }],
    ratings:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Rating"
    }],
    reviews:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Reviews"
    }],
    createdAt:{
      type:Date,
      default:Date.now()
    },
    username: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.isValidPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
