import jwt from 'jsonwebtoken';

export const generateToken = (payload: string) => {
  return jwt.sign(payload, process.env.JWT_SECRET ?? '', { expiresIn: '1h' });
};
