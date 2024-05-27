import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import cartRoutes from './routes/orderRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', cartRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
