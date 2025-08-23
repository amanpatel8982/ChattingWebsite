import jwt from "jsonwebtoken";
import User from "../model/userModel.js";


export const Protect = async (req, res , next) =>{
    try{
        const token = req.cookies.IDCard || "";
        console.log(token);

        if(!token){
            const error = new Error ("Unauthoried !! Login Again");
            error.statusCode = 401;
            return next(error);
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET);

        const verifiedUser = await User.findById(decode.ID);

        if(!verifiedUser){
            const error =  new Error ("Unauthorized !! login Again");
            error.statusCode =401;
            return next(error);
        }

        req.user = verifiedUser;
        next();
    }
    catch (error)
    {
       next(error);
    }
};