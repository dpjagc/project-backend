import type { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models';

export const getProducts = async (req: Request, res: Response) => {
  const { _page, _limit, category, q } = req.query as unknown as {
    _page: number;
    _limit: number;
    category: string;
    q: string;
  };

  const offset = Number(_limit) * (Number(_page) - 1);

  try {
    let where = {};
    if (category && category !== '') {
      where = { category };
    }

    if (q && q !== '') {
      where = { name: { [Op.like]: `%${q}%` } };
    }

    const products = await Product.findAll({
      where,
      limit: Number(_limit),
      offset
    });
    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id }
    });
    res.status(200).json(product);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
