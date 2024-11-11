const mongoose = require("mongoose");


const ratingSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  rating:{
    type:Number,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
})


module.exports = mongoose.model("Rating" , ratingSchema);