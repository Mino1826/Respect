import asyncHandler from 'express-async-handler';
import Order from '../models/Order.js';

// GET /api/orders (admin)
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'name email');
  res.json(orders);
});

// GET /api/orders/my (user)
export const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// POST /api/orders (user)
export const createOrder = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;
  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }
  const order = await Order.create({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice,
  });
  res.status(201).json(order);
});

// PUT /api/orders/:id/pay (admin)
export const markPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  order.isPaid = true;
  order.paidAt = new Date();
  const updated = await order.save();
  res.json(updated);
});

// PUT /api/orders/:id/deliver (admin)
export const markDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  order.isDelivered = true;
  order.deliveredAt = new Date();
  const updated = await order.save();
  res.json(updated);
});


