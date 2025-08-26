import express from "express";
import { 
    Register ,
    Login,
    GoogleLogin,
    SendOTPForLogin,
    SendOTPForRegister,
    Logout, 
} from "../controller/authController.js";


const router = express.Router();


router.post("/register",Register);
router.post("/login", Login);
router.post("/googleLogin", GoogleLogin);
router.post("/sendOtpRegister", SendOTPForRegister);
router.post("/sendOtpLogin", SendOTPForLogin);
router.get("/logout", Logout);



export default router;