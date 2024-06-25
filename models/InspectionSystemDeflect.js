const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const InspectionSystemDeflect = sequelize.define(
  "InspectionSystemDeflect",
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
    deflect_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    image_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deflect_detail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    update_status_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    update_status_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "inspection_system_deflect",
    timestamps: false,
  }
);

module.exports = InspectionSystemDeflect;
