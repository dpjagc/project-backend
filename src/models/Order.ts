import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

export class Order extends Model {
  public id!: number;
  public userId!: number;
  public orderStatus!: string;
  public subtotal!: number;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: false
  }
);
