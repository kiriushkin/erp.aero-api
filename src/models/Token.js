import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Token = sequelize.define(
  'token',
  {
    token: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    expireDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

try {
  await Token.sync({ alter: true });
  console.log('tokens table synced successfully');
} catch (err) {
  console.error(err);
}

export default Token;
