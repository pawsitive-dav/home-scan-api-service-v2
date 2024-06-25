const InspectionStorage = require("../models/InspectionStorage");

exports.getDeflectImageBy = async (req, res) => {
  const { image_id } = req.body;

  try {
    const inspectionStorage = await InspectionStorage.findAll({
      where: {
        image_id: image_id,
      },
      attributes: {
        exclude: [
          "id",
          "project_id",
          "inspection_id",
          "uploaded_at",
          "uploaded_by",
        ],
      },
    });

    if (!inspectionStorage) {
      return res.status(404).json({ error: "Inspection storage not found" });
    }

    res.json(inspectionStorage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
