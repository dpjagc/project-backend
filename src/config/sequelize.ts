import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'monorail.proxy.rlwy.net',
  port: Number(process.env.DB_PORT) || 13184,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'eEgdDswbjRlbpPlboFlIecGibKWXSLgB',
  database: process.env.DB_DATABASE || 'railway'
});

export default sequelize;
