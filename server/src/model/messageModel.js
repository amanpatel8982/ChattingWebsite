import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
  {
    receiverID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    senderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
     timestamp: {
      type: String,
      required: true,
    },
     deletedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
    
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);
export default Message;