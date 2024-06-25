const express = require("express");
const router = express.Router();
const reportListController = require("../controllers/reportListController");

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: API for managing reports
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Report:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the report.
 *         project_name:
 *           type: string
 *           description: The name of the project associated with the report.
 *         project_status:
 *           type: string
 *           description: The status of the project associated with the report.
 *         project_note:
 *           type: string
 *           description: Note about the project associated with the report.
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Date and time when the report was created.
 *         created_by:
 *           type: string
 *           description: User who created the report.
 *         approved_at:
 *           type: string
 *           format: date-time
 *           description: Date and time when the report was approved.
 *         approved_by:
 *           type: string
 *           description: User who approved the report.
 *       example:
 *         id: 1
 *         project_name: "Project Alpha"
 *         project_status: "Active"
 *         project_note: "Lorem ipsum dolor sit amet."
 *         created_at: "2023-06-25T00:00:00Z"
 *         created_by: "John Doe"
 *         approved_at: "2023-06-26T00:00:00Z"
 *         approved_by: "Jane Doe"
 */

/**
 * @swagger
 * /api/v2/report:
 *   get:
 *     summary: Get all reports with project details
 *     tags: [Reports]
 *     responses:
 *       '200':
 *         description: A JSON array of all reports with project details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Report'
 *       '500':
 *         description: Internal server error
 */
router.get("/report", reportListController.getAllReport);

module.exports = router;
