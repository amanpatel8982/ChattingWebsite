import mongoose, { Mongoose } from "mongoose";

const OtpSchema = mongoose.Schema({
    otp: {
        type: String,
        required: true,
    },

    email :{
        type: String,
        required: true,
    },

    createdAt: {
        type : Date,
        default:Date.now,
        expires:600,
    },
})

const OTP = Mongoose.model('OTP',OtpSchema)
export default OTP;