
/** 
 * @swagger
 * /system-info:
 *   get:
 *     summary: Get system information
 *     description: Retrieve information about the system
 *     responses:
 *       200:
 *         description: Successful response
 */

import { Router } from "express";
import { getSystemInfo,getHealthStatus } from "../controllers/system.controller.js";


const router = Router();


router.route("/system-info").get(getSystemInfo);
router.route("/health").get(getHealthStatus);


export default router;