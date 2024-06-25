const InspectionLocation = require("../models/InspectionLocation");

exports.getInspectionLocationBy = async (req, res) => {
  const { project_id, inspection_id } = req.body;

  try {
    const inspectionLocation = await InspectionLocation.findAll({
      where: {
        project_id: project_id,
        inspection_id: inspection_id,
      },
      attributes: { exclude: ["id", "project_id"] },
    });

    if (!inspectionLocation) {
      return res.status(404).json({ error: "Inspection location not found" });
    }

    res.json(inspectionLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
