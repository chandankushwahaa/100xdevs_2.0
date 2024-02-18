const Product = require('../models/product.model');

const getProduct = async (req, res) => {
  try{
    const products = await Product.find();
    res.status(200).json(products);
  }
  catch{
    res.status(500).json({message: "Internal server error"});
  }
};


const createProduct = async (req, res) => {
  try{
    const product =  await Product.create(req.body);
    res.status(200).json(product);
  }
  catch{
    res.status(500).json({message: "Internal server error"});
  }
};


const updatedProduct = async (req, res) => {
  try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if(!product){
      return res.status(404).json({message: "Product not found"});
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  }
  catch{
    res.status(500).json({message: "Internal server error"});
  }
};


const deleteProduct = async (req, res) => {
  try{
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product){
      return res.status(404).json({message: "Product not found"});
    }
    res.status(200).json({message: "Product deleted"});
  }
  catch{
    res.status(500).json({message: "Internal server error"});
  }
};
  

module.exports = {
  getProduct,
  createProduct,
  updatedProduct,
  deleteProduct
}