const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const ProjectDetail = sequelize.define(
  "ProjectDetail",
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
    project_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_note: {
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
    status_update_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "project_detail",
    timestamps: false,
  }
);

module.exports = ProjectDetail;
