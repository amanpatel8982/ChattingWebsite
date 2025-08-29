// routes/messageRoute.js
import express from "express";
import { Protect } from "../middleware/authMiddleware.js";
import { deleteMessage } from "../controller/messageController.js";

const router = express.Router();

router.delete("/deleteMessage/:id", Protect, deleteMessage);

export default router;
