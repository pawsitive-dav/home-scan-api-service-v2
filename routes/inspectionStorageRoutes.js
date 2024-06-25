const express = require("express");
const router = express.Router();
const InspectionStorageController = require("../controllers/InspectionStorageController");

/**
 * @swagger
 * tags:
 *   name: Inspection Map Image
 *   description: APIs related to Inspection map image
 */

/**
 * @swagger
 * /api/v2/inspection/map/image:
 *   post:
 *     summary: Get Deflect Image by Image ID
 *     tags: [Inspection Map Image]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image_id:
 *                 type: string
 *                 description: ID of the image
 *                 example: "7fc5519e-7feb-4bac-bcd2-108795e0d832"
 *     responses:
 *       200:
 *         description: A list of Inspection Storage objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   image_name:
 *                     type: string
 *                     description: Name of the image
 *                   image_path:
 *                     type: string
 *                     description: Path of the image
 *                   image_size:
 *                     type: integer
 *                     description: Size of the image in bytes
 *       404:
 *         description: Inspection storage not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Inspection storage not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Internal server error message
 */
router.post(
  "/inspection/map/image",
  InspectionStorageController.getDeflectImageBy
);

module.exports = router;
