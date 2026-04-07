import { Router } from "express";
import { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } from "../controllers/blog.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Public routes (anyone can read blogs)
router.route("/").get(getBlogs);
router.route("/:id").get(getBlogById);

// Protected routes (admin only)
router.route("/").post(verifyJWT, createBlog);
router.route("/:id").patch(verifyJWT, updateBlog).delete(verifyJWT, deleteBlog);

export default router;
