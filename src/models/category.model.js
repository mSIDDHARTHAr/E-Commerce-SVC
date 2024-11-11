const mongoose = require("mongoose");


const categorySchema = mongoose.Schema({
  name:{
    type:String,
    require:true,
    maxLegth:50
  },
  parentCategory:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Categories"
  },
  lavel:{
    type:Number,
    require:true
  }
});

module.exports = mongoose.Schema("Categories" , categorySchema);