const createResponseModel = require("../utils/responseModel");
const productService = require("../services/productService");

const createProduct = async(req , res , next) =>{
  try {
    const payload = {...req.body};
    const product = await productService.createProduct(payload);
    res.status(201).json(createResponseModel(201 , "Product Created Succefully" , product));
  } catch (error) {
    res.status(500).json(createResponseModel(500 , "Not Created" , {}))
    next(error)
  }
}

const updateProduct = async (req , res ,next)=>{
  try{
    let payoad = {...req.body};
    let Product = await productService.getProductById(req.params.id);
    if(Product){
      let updatedProduct  = productService.updateProducts(req.params.id , payoad);
    }
  }catch{

  }
}