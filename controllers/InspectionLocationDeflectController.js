const InspectionLocationDeflect = require("../models/InspectionLocationDeflect");

exports.getInspectionLocationDeflectBy = async (req, res) => {
  const { inspection_id, location_id } = req.body;

  try {
    const inspectionLocationDeflect = await InspectionLocationDeflect.findAll({
      where: {
        inspection_id: inspection_id,
        location_id: location_id,
      },
      attributes: { exclude: ["project_id"] },
    });

    if (!inspectionLocationDeflect) {
      return res
        .status(404)
        .json({ error: "Inspection location deflect not found" });
    }

    res.json(inspectionLocationDeflect);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
