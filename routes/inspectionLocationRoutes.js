const express = require("express");
const router = express.Router();
const InspectionLocationController = require("../controllers/InspectionLocationController");
const InspectionLocationDeflectController = require("../controllers/InspectionLocationDeflectController");

/**
 * @swagger
 * tags:
 *   name: Inspection Locations
 *   description: APIs for managing inspection locations
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     InspectionLocation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the inspection location.
 *         project_id:
 *           type: string
 *           description: The project ID associated with the inspection location.
 *         inspection_id:
 *           type: string
 *           description: The inspection ID associated with the inspection location.
 *         location_id:
 *           type: string
 *           description: The location ID of the inspection location.
 *         location_name:
 *           type: string
 *           description: The name of the location.
 *         item_number:
 *           type: integer
 *           description: The item number related to the inspection location.
 *       example:
 *         id: 1
 *         project_id: "ABC123"
 *         inspection_id: "XYZ789"
 *         location_id: "LOC001"
 *         location_name: "Main Office"
 *         item_number: 1
 */

/**
 * @swagger
 * /api/v2/inspection/location:
 *   post:
 *     summary: Get inspection locations by project and inspection ID
 *     tags: [Inspection Locations]
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
 *         description: A JSON array of inspection locations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/InspectionLocation'
 *       '404':
 *         description: No inspection locations found for the given project and inspection IDs
 *       '500':
 *         description: Internal server error
 */
router.post(
  "/inspection/location",
  InspectionLocationController.getInspectionLocationBy
);

/**
 * @swagger
 * /api/v2/inspection/location/deflect:
 *   post:
 *     summary: Get Inspection Location Deflect by Inspection ID and Location ID
 *     tags: [Inspection Locations]
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
 *               location_id:
 *                 type: string
 *                 description: ID of the location
 *                 example: "fc80c69c-7dc5-4ffb-9970-547f7113ca6e"
 *     responses:
 *       200:
 *         description: A list of Inspection Location Deflect objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Unique identifier for the Inspection Location Deflect
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
 *         description: Inspection location deflect not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Inspection location deflect not found
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
  "/inspection/location/deflect",
  InspectionLocationDeflectController.getInspectionLocationDeflectBy
);

module.exports = router;
