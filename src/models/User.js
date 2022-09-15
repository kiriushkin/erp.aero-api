import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

try {
  await User.sync({ alter: true });
  console.log('users table synced successfully');
} catch (err) {
  console.error(err);
}

export default User;
