const { get } = require('mongoose');
const Product = require('../models/product.model.js');
const getProducts = async (req, res) => {
    async(req,res)=>{
    try{
        const products =  await Product.find({});
        res.status(200).json(products);
    } catch(err){
        res.status(500).json({message: err.message});
    }
}};

const getProduct = async (req, res) => {
    try{
        const product =  await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const createProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);             
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const updatedProduct = async (req, res) => {
    try{
        const {id} = req.params;

        await Product.findByIdAndUpdate(id, req.body);
        const updatedProduct = await Product.findById(id);
        if(!updatedProduct){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const deletedProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct){
            return res.status(404).json({message: "Product not found"});
        }   
        res.status(200).json(deletedProduct);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
module.exports = {
    getProducts,getProduct,createProduct,updatedProduct, deletedProduct
};