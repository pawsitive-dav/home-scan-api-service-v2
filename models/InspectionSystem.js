const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const InspectionSystem = sequelize.define(
  "InspectionSystem",
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
    system_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    system_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "inspection_system",
    timestamps: false,
  }
);

module.exports = InspectionSystem;
