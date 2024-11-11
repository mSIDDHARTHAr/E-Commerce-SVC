const mongoose = require("mongoose");



const cartSchema = new  mongoose.Schema({
  cart:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Cart",
    require:true
  },
  product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
    require:true
  },
  size:{
    type:String,
    require:true
  },
  quantity:{
    type:Number,
    require:true
  },
  price:{
    type:Number,
    require:true
  },
  discountedPrice:{
    type:Number,
    require:true,
    default:0
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
})

module.exports = mongoose.model("cartItem" , cartSchema);