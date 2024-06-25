const express = require("express");
const router = express.Router();
const InspectionSystemController = require("../controllers/InspectionSystemController");
const InspectionSystemDeflectController = require("../controllers/InspectionSystemDeflectController");

/**
 * @swagger
 * tags:
 *   name: Inspection Systems
 *   description: APIs for managing inspection systems
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     InspectionSystem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the inspection system.
 *         project_id:
 *           type: string
 *           description: The project ID associated with the inspection system.
 *         inspection_id:
 *           type: string
 *           description: The inspection ID associated with the inspection system.
 *         system_id:
 *           type: string
 *           description: The system ID of the inspection system.
 *         system_name:
 *           type: string
 *           description: The name of the system.
 *         item_number:
 *           type: integer
 *           description: The item number related to the inspection system.
 *       example:
 *         id: 1
 *         project_id: "ABC123"
 *         inspection_id: "XYZ789"
 *         system_id: "SYS001"
 *         system_name: "HVAC System"
 *         item_number: 1
 */

/**
 * @swagger
 * /api/v2/inspection/system:
 *   post:
 *     summary: Get inspection systems by project and inspection ID
 *     tags: [Inspection Systems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               project_id:
 *                 type: string
 *                 example: "dcbfd579-356d-4d7d-81cd-27012f702249"
 *               inspection_id:
 *                 type: string
 *                 example: "3b8f6089-0759-48eb-84e3-a5021bda92e1"
 *     responses:
 *       '200':
 *         description: A JSON array of inspection systems
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/InspectionSystem'
 *       '404':
 *         description: No inspection systems found for the given project and inspection IDs
 *       '500':
 *         description: Internal server error
 */
router.post(
  "/inspection/system",
  InspectionSystemController.getInspectionSystemBy
);

/**
 * @swagger
 * /api/v2/inspection/system/deflect:
 *   post:
 *     summary: Get Inspection System Deflect by Inspection ID and System ID
 *     tags: [Inspection Systems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               inspection_id:
 *                 type: string
 *                 description: ID of the inspection
 *                 example: "3b8f6089-0759-48eb-84e3-a5021bda92e1"
 *               system_id:
 *                 type: string
 *                 description: ID of the system
 *                 example: "b187bdf9-f32c-43b2-91a0-b0bc4a341a5b"
 *     responses:
 *       200:
 *         description: A list of Inspection System Deflect objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Unique identifier for the Inspection System Deflect
 *                   deflect_status:
 *                     type: integer
 *                     description: Status of the deflect
 *                   image_id:
 *                     type: string
 *                     description: ID of the associated image
 *                   deflect_detail:
 *                     type: string
 *                     description: Detailed information about the deflect
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time when the record was created
 *                   created_by:
 *                     type: string
 *                     description: User who created the record
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time when the record was last updated
 *                   updated_by:
 *                     type: string
 *                     description: User who last updated the record
 *                   update_status_at:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time when the status was last updated
 *                   update_status_by:
 *                     type: string
 *                     description: User who last updated the status
 *       404:
 *         description: Inspection system deflect not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Inspection system deflect not found
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
  "/inspection/system/deflect",
  InspectionSystemDeflectController.getInspectionSystemDeflectBy
);

module.exports = router;
