const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const InspectionStorage = sequelize.define(
  "InspectionStorage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inspection_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uploaded_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    uploaded_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "inspection_storage",
    timestamps: false,
  }
);

module.exports = InspectionStorage;
