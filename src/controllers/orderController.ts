import type { Request, Response } from 'express';
import { CartItem, Order } from '../models';

export const createOrder = async (req: Request, res: Response) => {
  const { userId, orderStatus, subtotal, cartItems } = req.body;
  try {
    const order = await Order.create({
      orderStatus,
      userId,
      subtotal
    });

    await Promise.all(
      cartItems.map(async (cartItem: any) => {
        await CartItem.create({
          orderId: order.id,
          productId: cartItem.id,
          title: cartItem.title,
          image: cartItem.image,
          price: cartItem.price,
          amount: cartItem.amount
        });
      })
    );

    res.status(201).json({ message: 'Orden creada exitosamente' });
  } catch (error) {
    console.error('Error al crear orden:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const removeFromCart = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { productId, userId } = req.query;

  try {
    const cartItem = await CartItem.findOne({
      where: { id, productId, userId }
    });
    if (!cartItem) {
      return res
        .status(404)
        .json({ message: 'Producto no encontrado en el carrito' });
    }
    await cartItem.destroy();
    res.status(200).json({ message: 'Producto eliminado del carrito' });
  } catch (error) {
    console.error('Error al eliminar producto del carrito:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const { user } = req.query;
    const cartItems = await Order.findAll({
      where: { userId: user },
      include: [CartItem]
    });
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error al obtener las ordenes:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
