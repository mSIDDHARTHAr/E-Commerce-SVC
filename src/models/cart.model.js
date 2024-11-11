const mongoose  = require("mongoose");

const cartSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    require:true
  },
  cartItems:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"cartItem",
    require:true
  }],
  totalPrice:{
    type:Number,
    require:true
  },
  totalItem:{
    type:Number,
    require:true,
    default:0
  },
  totalDiscountedPrice:{
    type:Number,
    require:true,
    default:0
  },
  discount:{
    type:Number,
    require:true,
    default:0
  }
});


module.export = mongoose.model("Cart" , cartSchema);
