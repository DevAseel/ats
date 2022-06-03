import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const healthCheck = async (req: Request, res: Response) => {
	res.status(200).send("API is healthy");
};
