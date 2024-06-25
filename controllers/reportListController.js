const sequelize = require("../config/config");
const ReportList = require("../models/ReportList");
const ProjectDetail = require("../models/ProjectDetail");

exports.getAllReport = async (req, res) => {
  try {
    const query = `
      SELECT rl.id, pd.project_name, pd.project_status, pd.project_note, rl.created_at, rl.created_by, rl.approved_at, rl.approved_by
      FROM report_list rl
      LEFT JOIN project_detail pd ON rl.project_id = pd.project_id
    `;

    const reportList = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
      model: ReportList,
      mapToModel: true,
      include: [ProjectDetail],
    });

    res.json(reportList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
