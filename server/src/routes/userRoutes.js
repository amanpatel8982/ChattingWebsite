import express from "express";
import { Protect } from "../middleware/authMiddleware.js";
import { GetAllUser } from "../controller/userController.js";

const router = express.Router();

router.get("/allUsers", Protect, GetAllUser);

export default router;