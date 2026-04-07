import { Router } from "express";
import { loginAdmin, verifyAdmin } from "../controllers/admin.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/login").post(loginAdmin);
router.route("/verify").get(verifyJWT, verifyAdmin);

export default router;
