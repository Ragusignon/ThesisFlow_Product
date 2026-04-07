import { Router } from "express";
import { createLegalPage, getLegalPages, getLegalPageById, updateLegalPage, deleteLegalPage } from "../controllers/legalPage.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Public routes (anyone can read legal pages)
router.route("/").get(getLegalPages);
router.route("/:id").get(getLegalPageById);

// Protected routes (admin only)
router.route("/").post(verifyJWT, createLegalPage);
router.route("/:id").patch(verifyJWT, updateLegalPage).delete(verifyJWT, deleteLegalPage);

export default router;
