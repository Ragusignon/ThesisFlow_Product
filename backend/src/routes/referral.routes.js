import { Router } from "express";
import { createReferral, getReferrals, updateReferral, deleteReferral } from "../controllers/referral.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Public route for landing page submissions
router.route("/").post(createReferral);

// Protected routes (admin only)
router.route("/").get(verifyJWT, getReferrals);
router.route("/:id").patch(verifyJWT, updateReferral).delete(verifyJWT, deleteReferral);

export default router;
