import express from 'express';
import {
  registerUser,
  loginUser,
  getUserById,
  updateUser
} from '../controllers';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);

export default router;
