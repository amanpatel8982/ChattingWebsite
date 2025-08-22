import User from "../model/userModel.js";
import bcrypt from "bcrypt";

export const Register = async (req, res, next) =>{
    try {

        console.log("xfcgvbnm,");
        
   const { 
         fullName,
         email,
         password
        } = req.body;

         if(!fullName || !email || !password)
            {
                const error = Error("All fields are requireds")
                error.StatusCode=400;
                return next(error);
            }

            const exitingUser = await User.findOne({email});
            if(exitingUser)
            {
              const error = Error("User Already exit");
              error.StatusCode=400;
              return next(error);
            }

            const hashPassword = await bcrypt.hash(password,10);

            const newUser = await User.create({
                fullName,
                email,
                password:hashPassword,
            });
            
            res.status(200).json({message: "Registration Successfully", data:newUser 
            });
        }
            catch (error) {
                error.StatusCode = 500;
                next(error);
            }   
};