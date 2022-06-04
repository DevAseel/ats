import { Router } from "express";
import { healthCheck } from "../endpoints/healthCheck";

const router = Router();
/**
 * @swagger
 * /api/health-check:
 *  post:
 *      summary: create a new agent
 *      tags: [Agent]
 *      description: use to create a new agent
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/AgentIDTO'
 *      responses:
 *          '200':
 *              description: Agent created successfully
 *          '400':
 *                  description: Bad Request
 *          '500':
 *                  description: Internal server error
 */
router.route("/health-check").get(healthCheck);

export default router;
