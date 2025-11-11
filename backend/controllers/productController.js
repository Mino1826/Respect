import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// add product
export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, bestseller } = req.body;

    // اگر با multer.fields آپلود کردی، فایل‌ها تو req.files میان
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    // آپلود به کلودینری (فرض بر اینه که قبلاً cloudinary.config(...) رو انجام دادی)
    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      subCategory,
      price: Number(price),
      bestseller: bestseller === "true" || bestseller === true,
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    return res.status(201).json({ success: true, message: "product added", product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// list products
export const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// remove product
export const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;           // چون روتت POST /remove هست
    if (!id) return res.status(400).json({ success: false, message: "id is required" });

    await productModel.findByIdAndDelete(id);
    return res.json({ success: true, message: "product removed" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// single product info
export const singleProduct = async (req, res) => {
  try {
    const { id } = req.body;           // روتت POST /single هست؛ اگر GET گرفتی از req.params.id بگیر
    if (!id) return res.status(400).json({ success: false, message: "id is required" });

    const product = await productModel.findById(id);
    if (!product) return res.status(404).json({ success: false, message: "product not found" });

    return res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};


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
