import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { IoArrowBack } from "react-icons/io5";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { authUser } = useAuthContext();
    const { onlineUsers } = useSocketContext();

    const isOnline = onlineUsers.includes(selectedConversation?._id);

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div
            className={`md:min-w-[450px] flex-col flex-1
            ${selectedConversation ? "flex" : "hidden sm:flex"}`}
        >
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className='bg-slate-700 px-4 py-3 mb-2 flex items-center gap-3 border-b border-slate-600'>
                        <button
                            className='btn btn-circle btn-sm sm:hidden'
                            onClick={() => setSelectedConversation(null)}
                        >
                            <IoArrowBack />
                        </button>

                        <div className='avatar'>
                            <div className='w-10 rounded-full overflow-hidden'>
                                <img
                                    src={
                                        selectedConversation.profilepic ||
                                        `https://ui-avatars.com/api/?name=${selectedConversation.fullName
                                            .split(" ")
                                            .map((word) => word[0])
                                            .join("")}&background=random&color=fff`
                                    }
                                    alt='user avatar'
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://ui-avatars.com/api/?name=${selectedConversation.fullName
                                            .split(" ")
                                            .map((word) => word[0])
                                            .join("")}&background=random&color=fff`;
                                    }}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <span className='font-bold text-white'>
                                {selectedConversation.fullName}
                            </span>
                            <span
                                className={`text-xs ${
                                    isOnline ? "text-green-400" : "text-gray-400"
                                }`}
                            >
                                {isOnline ? "Online" : "Offline"}
                            </span>
                        </div>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

const NoChatSelected = () => {
    const { authUser } = useAuthContext();

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome {authUser.fullName} 👋</p>
                <p>Select a chat to start messaging</p>
            </div>
        </div>
    );
};

export default MessageContainer;    