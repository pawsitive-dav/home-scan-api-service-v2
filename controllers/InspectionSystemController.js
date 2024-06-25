const InspectionSystem = require("../models/InspectionSystem");

exports.getInspectionSystemBy = async (req, res) => {
  const { project_id, inspection_id } = req.body;

  try {
    const inspectionSystem = await InspectionSystem.findAll({
      where: {
        project_id: project_id,
        inspection_id: inspection_id,
      },
      attributes: { exclude: ["id", "project_id"] },
    });

    if (!inspectionSystem) {
      return res.status(404).json({ error: "Inspection system not found" });
    }

    res.json(inspectionSystem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
