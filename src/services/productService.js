const Product = require("../models/product.model");


/**
 * Create a Product 
 * @param {Object} productData 
 * @returns {Promise<Product>}
 */
const createProduct = async (productData) =>{
  const product = await Product.create(productData);
  return product;
}

/**
 * 
 * @returns {Promise<Product[]>}
 */
const getAllProducts = async () =>{
  const products = await Product.find();
  return products
}



/**
 * 
 * @param {Number , {Partial<Product>}} id , updatedData
 * @return {Promise<Product>}
 */
const updateProducts = async (id , updatedData) =>{
  const product = await Product.findByIdAndUpdate(id , updatedData ,{
    new:true,
    runValidators:true
  })
  return product
}

/**
 * 
 * @param {String} id 
 * @returns  product
 */
const getProductById = async(id)=>{
  const product = await Product.findById(id);
  return product;
}

/**
 * 
 * @param {String} id 
 */
const deleteProduct = async (id) =>{
  const product = await Product.findByIdAndDelete(id);
}



module.exports = {
  createProduct,
  getAllProducts,
  updateProducts,
  deleteProduct,
  getProductById
}

