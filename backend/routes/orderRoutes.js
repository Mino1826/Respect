import express from 'express';
import { getOrders, getMyOrders, createOrder, markPaid, markDelivered } from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, admin, getOrders);
router.get('/my', protect, getMyOrders);
router.post('/', protect, createOrder);
router.put('/:id/pay', protect, admin, markPaid);
router.put('/:id/deliver', protect, admin, markDelivered);

export default router;


