const mongoose = require("mongoose");


const AddressSchema = new mongoose.Schema({

  firstName:{
    type:String,
    require:true
  },
  LastName:{
    type:String,
    require:true
  },
  streetAddress:{
    type:String,
    require:true
  },
  city:{
    type:String,
    require:true
  },
  state:{
    type:String,
    require:true
  },
  pincode:{
    type:Number,
    require:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  mobile:{
    type:String,
    require:true
  }

})


module.export = mongoose.model("Address" , AddressSchema);