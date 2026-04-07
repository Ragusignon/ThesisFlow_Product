import { Router } from "express";
import { subscribeToNewsletter, getSubscribers, unsubscribe } from "../controllers/newsletter.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Public route for landing page subscription
router.route("/").post(subscribeToNewsletter);

// Protected routes (admin only)
router.route("/").get(verifyJWT, getSubscribers);
router.route("/:id").delete(verifyJWT, unsubscribe);

export default router;
