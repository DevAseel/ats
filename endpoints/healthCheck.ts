import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * @openapi
 * /api/health-check:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Server health status
 *     responses:
 *       200:
 *         description: Server is up and running
 */

export const healthCheck = async (req: Request, res: Response) => {
	res.status(200).json({
		status: 200,
		msg: "API is healthy",
	});
};
