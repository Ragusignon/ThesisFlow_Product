import { Router } from "express";
import { createDemoRequest, getDemoRequests, updateDemoRequest, deleteDemoRequest } from "../controllers/demoRequest.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(createDemoRequest).get(verifyJWT,getDemoRequests);

router.route("/:id").delete(verifyJWT,deleteDemoRequest);

export default router;
