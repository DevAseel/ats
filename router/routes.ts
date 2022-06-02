import { Router } from "express";
import { healthCheck } from "../endpoints/healthCheck";

const router = Router();

router.route("/health-check").get(healthCheck);

export default router;
