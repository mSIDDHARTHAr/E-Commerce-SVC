const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  orderItems:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"OrderItem"
  }],
  orderDate:{
    type:Date,
    required:true,
    default:Date.now()
  },
  daliveryDate:{
    type:Date
  },
  shippingAddress:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Address"
  },
  paymentDetails:{
    paymentMethod:{
      type:String
    },
    transactionId:{
      type:String
    },
    paymentId:{
      type:String
    },
    paymentStatus:{
      type:String,
      default:"PENDING"
    }
  },
  totalPrice:{
    type:Number,
    required:true
  },
  totalDiscountedPrice:{
    type:Number,
    required:true
  },
  discount:{
    type:Number,
    required:true
  },
  orderStatus:{
    type:String,
    required:true,
    default:"PENDING"
  }, 
  totalItems:{
    type:Number,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }

});


module.exports = mongoose.model("Order" , orderSchema);

