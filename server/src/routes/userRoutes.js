import express from "express";
import { Protect } from "../middleware/authMiddleware.js";
import { GetAllUser , SendMessage, ReceiveMessage} from "../controller/userController.js";

const router = express.Router();

router.get("/allUsers", Protect, GetAllUser);
router.post("/sendMessage/:id", Protect, SendMessage);
router.get("/receiveMessage/:id", Protect, ReceiveMessage);

export default router;