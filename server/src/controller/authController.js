import User from "../model/userModel.js";
import bcrypt from "bcrypt";

export const Register = async (req, res, next) =>{
    try {

       
        
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

// export const Login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       const error = new Error("all fleids Required");
//       error.statusCode = 400;
//       return next(error);
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       const error = new Error("User Not Registered");
//       error.statusCode = 400;
//       return next(error);
//     }

//     const isVerified = await bcrypt.compare(password, user.password);// Password ko verify kr rha hai

//     if (!isVerified) {
//       const error = new Error("Invalid Username or Password");
//       error.statusCode = 401;
//       return next(error);
//     }

//     genToken(user._id, res); // Token generate kr rha hai aur response me bhej rha hai

//     res
//       .status(200)
//       .json({ message: `Welcome Back ${user.fullName}`, data: user });
//   } catch (error) {
//     next(error);
//   }
// };