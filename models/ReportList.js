const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const ReportList = sequelize.define(
  "ReportList",
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
    report_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approved_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    approved_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    report_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "report_list",
    timestamps: false,
  }
);

module.exports = ReportList;
