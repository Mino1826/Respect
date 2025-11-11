import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js'

//add product
export const addProduct = async(req,res) =>{

    try {
        const{name,description,price,category,subCategory,bestseller} = req.body

        const image1 =req.file.image1 && req.files.image1[0]
        const image2 =req.file.image2 && req.files.image2[0]
        const image3 =req.file.image3 && req.files.image3[0]
        const image4 =req.file.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
                return result.secure_url

            })
        )

        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestseller: bestseller === 'true' ? true : false,
            image:imagesUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        


    } catch (error) {
        console.log(error);
        
        res.json({success:false,message:error.message})
    }

}
//list product
export const listProducts = async(req,res) =>{

}
//remove product
export const removeProduct = async(req,res) =>{

}
//single product info
export const singleProduct = async(req,res) =>{

}

// export default {listProducts, addProduct, removeProduct, singleProduct};





// import asyncHandler from 'express-async-handler';
// import Product from '../models/Product.js';

// // GET /api/products
// export const getProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({});
//   res.json(products);
// });

// // GET /api/products/:id
// export const getProductById = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) {
//     res.status(404);
//     throw new Error('Product not found');
//   }
//   res.json(product);
// });

// // POST /api/products (admin)
// export const createProduct = asyncHandler(async (req, res) => {
//   const product = await Product.create({ ...req.body });
//   res.status(201).json(product);
// });

// // PUT /api/products/:id (admin)
// export const updateProduct = asyncHandler(async (req, res) => {
//   const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   if (!product) {
//     res.status(404);
//     throw new Error('Product not found');
//   }
//   res.json(product);
// });

// // DELETE /api/products/:id (admin)
// export const deleteProduct = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) {
//     res.status(404);
//     throw new Error('Product not found');
//   }
//   await product.deleteOne();
//   res.json({ message: 'Product removed' });
// });

