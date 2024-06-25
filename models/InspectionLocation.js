const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const InspectionLocation = sequelize.define(
  "InspectionLocation",
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
    location_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "inspection_location",
    timestamps: false,
  }
);

module.exports = InspectionLocation;
