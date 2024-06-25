const InspectionSystemDeflect = require("../models/InspectionSystemDeflect");

exports.getInspectionSystemDeflectBy = async (req, res) => {
  const { inspection_id, system_id } = req.body;

  try {
    const inspectionSystemDeflect = await InspectionSystemDeflect.findAll({
      where: {
        inspection_id: inspection_id,
        system_id: system_id,
      },
      attributes: { exclude: ["project_id"] },
    });

    if (!inspectionSystemDeflect) {
      return res
        .status(404)
        .json({ error: "Inspection system deflect not found" });
    }

    res.json(inspectionSystemDeflect);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
