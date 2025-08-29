// messageController.js
import Message from "../model/messageModel.js";

export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    // Sirf apne messages delete kar paaye
    if (message.sender.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed to delete this message" });
    }

    await message.deleteOne();

    res.json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
