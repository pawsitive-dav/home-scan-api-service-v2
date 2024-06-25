const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const MemberInfo = sequelize.define(
  "MemberInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    account_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    code_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    member_role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "member_info",
    timestamps: false,
  }
);

module.exports = MemberInfo;
