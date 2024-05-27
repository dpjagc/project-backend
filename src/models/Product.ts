import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

export class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public category!: string;
  public imageUrl!: string;
  public price!: number;
  public productCode!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productCode: {
      type: DataTypes.INTEGER
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false
  }
);
