import express from 'express';
import {
  createOrder,
  removeFromCart,
  getOrders
} from '../controllers/orderController';

const router = express.Router();

router.post('/', createOrder);
router.delete('/remove/:id', removeFromCart);
router.get('/', getOrders);

export default router;
