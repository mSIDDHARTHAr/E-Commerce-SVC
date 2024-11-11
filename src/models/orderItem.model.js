const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");
const { Schema } = moongose;


const orderSchema = new Schema({
  product:{
    type:moongose.Schema.Types.ObjectId,
    ref: "Product",
    required:true
  },
  size:{
    type:String
  },
  quantity:{
    type:Number,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  discountedPrice:{
    type:Number,
    required:true
  },
  userId:{
    type:moongose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
});


module.exports = mongoose.model("OrderItem" , orderSchema);