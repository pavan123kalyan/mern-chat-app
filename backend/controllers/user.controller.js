import User from '../models/user.model.js';
import Conversation from '../models/conversation.model.js';
import Message from '../models/messages.model.js';

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({
            _id: { $ne: loggedInUserId }
        }).select("-password");

        const usersWithLastMessage = await Promise.all(
            filteredUsers.map(async (user) => {
                const conversation = await Conversation.findOne({
                    participants: { $all: [loggedInUserId, user._id] },
                }).populate({
                    path: "messages",
                    options: {
                        sort: { createdAt: -1 },
                        limit: 1,
                    },
                });

                return {
                    ...user._doc,
                    lastMessage: conversation?.messages?.[0]?.message || "",
                    lastMessageTime: conversation?.messages?.[0]?.createdAt || null,
                };
            })
        );

        res.status(200).json(usersWithLastMessage);
    } catch (error) {
        console.log("Error occured in getUsersForSideBar ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};