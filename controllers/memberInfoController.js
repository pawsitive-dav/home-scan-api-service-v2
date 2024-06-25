const MemberInfo = require("../models/MemberInfo");

exports.getAllMember = async (req, res) => {
  try {
    const memberInfo = await MemberInfo.findAll({
      attributes: { exclude: ["id", "member_role"] },
    });
    res.json(memberInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
