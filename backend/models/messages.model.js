import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
    {
        senderId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        recieverId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        message:{
            type: String,
            default: "",
        },mediaUrl: {
            type: String,
            default: "",
        },
        mediaType: {
            type: String,
            enum: ["image", "video", "file", ""],
            default: "",
        },
        fileName: {
            type: String,
            default: "",
        },
    },
    {timestamps:true}
);
const Message = mongoose.model("Message",messageSchema);
export default Message;