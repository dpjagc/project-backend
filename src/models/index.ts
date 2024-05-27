import { CartItem } from './CartItem';
import { Order } from './Order';
import { Product } from './Product';
import { User } from './User';

export * from './CartItem';
export * from './Order';
export * from './Product';
export * from './User';

CartItem.belongsTo(Order, { foreignKey: 'orderId' });
CartItem.belongsTo(Product, { foreignKey: 'productId' });
Order.belongsTo(User, { foreignKey: 'userId' });
Order.hasMany(CartItem, { foreignKey: 'orderId' });
