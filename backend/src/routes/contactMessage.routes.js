import { Router } from "express";
import { createContactMessage, getContactMessages, updateContactMessage, deleteContactMessage } from "../controllers/contactMessage.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(createContactMessage).get(verifyJWT, getContactMessages);

router.route("/:id").put(verifyJWT, updateContactMessage).delete(verifyJWT, deleteContactMessage);

export default router;
