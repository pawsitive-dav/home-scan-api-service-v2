const express = require("express");
const router = express.Router();
const memberInfoController = require("../controllers/memberInfoController");

/**
 * @swagger
 * components:
 *   schemas:
 *     MemberInfo:
 *       type: object
 *       properties:
 *         account_id:
 *           type: string
 *           description: The account ID of the member
 *         avatar_path:
 *           type: string
 *           description: The path to the member's avatar image
 *         first_name:
 *           type: string
 *           description: The first name of the member
 *         last_name:
 *           type: string
 *           description: The last name of the member
 *         code_name:
 *           type: string
 *           description: The code name of the member
 */

/**
 * @swagger
 * /api/v2/members:
 *   get:
 *     summary: Returns the list of all the members
 *     tags: [MemberInfo]
 *     responses:
 *       200:
 *         description: The list of the members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MemberInfo'
 */
router.get("/members", memberInfoController.getAllMember);

module.exports = router;
