import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { itemId, quantity = 1 } = req.body;

    // ۱) گرفتن توکن از هدر
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    // ۲) درآوردن id از توکن
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    // ۳) پیدا کردن کاربر
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // ۴) اطمینان از این‌که cartData یه آبجکت هست
    let cartData = userData.cartData || {};   // اگر null بود، {} می‌ذاریم

    const prevQty = cartData[itemId] || 0;
    cartData[itemId] = prevQty + quantity;    // اینجا quantity رو جمع می‌کنیم

    userData.cartData = cartData;
    await userData.save();

    res.json({ success: true, message: "Added to cart", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


//update user cart
export const updateCart = async (req,res)=>{
    try {
        const {userId,itemId,quantity} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success:true, message:'Cart Updated'})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
    
}

//get user cart data
export const getUserCart = async (req,res)=>{
    try {
        const {userId} = req.body


        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({success:true, cartData})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
}


