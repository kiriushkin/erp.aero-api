import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const File = sequelize.define(
  'file',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ext: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    mimetype: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uploadDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

try {
  await File.sync({ alter: true });
  console.log('files table synced successfully');
} catch (err) {
  console.error(err);
}

export default File;
