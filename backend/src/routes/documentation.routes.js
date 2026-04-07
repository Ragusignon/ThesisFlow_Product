import { Router } from "express";
import { createDocumentation, getDocumentation, getDocumentationById, updateDocumentation, deleteDocumentation } from "../controllers/documentation.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Public routes
router.route("/").get(getDocumentation);
router.route("/:id").get(getDocumentationById);

// Protected routes (admin only)
router.route("/").post(verifyJWT, createDocumentation);
router.route("/:id").patch(verifyJWT, updateDocumentation).delete(verifyJWT, deleteDocumentation);

export default router;
