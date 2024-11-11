const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    titel: {
      type: String,
      // require:true
    },
    desctiption:{
      type:String
    },
    quantity: {
      type: BigInt,
      require: true,
    },
    price: {
      type: BigInt,
      require: true,
    },
    discountedPrice:{
      type:BigInt , 
      require:true
    },
    discountPresent:{
      type:BigInt,
      required:true
    },
    brand:{
      type:String
    },
    color:{
      type:String
    },
    sizes: [{
      type: String,
      require: false,
    }],
    image: [{
      type: String,
      require: true,
    }],
    rating:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Rating"
    }],
    reviews:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Review"
    }],
    numRating:{
      type:Number,
      default:0
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Categories"
    },
    createdAt:{
      type:Date,
      default:Date.now
    }

  }
);

export default Product =
  mongoose.model.Products || mongoose.model("Product", ProductSchema);
