import React from 'react'
import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';
const Message = ({message}) => {
    const {authUser}=useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe= message.senderId ===authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilepic:selectedConversation?.profilepic; 
    const bubbleBgColor = fromMe?'bg-blue-500':"";  
    const formattedTime = extractTime(message.createdAt);
    const shakeClass = message.shouldShake ?"shake" :"";    

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                
                <img
    src={
        profilePic ||
        `https://ui-avatars.com/api/?name=${(fromMe ? authUser.fullName : selectedConversation?.fullName).replace(" ", "+")}&background=random&color=fff`
    }
    alt="user avatar"
    onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://ui-avatars.com/api/?name=${(fromMe ? authUser.fullName : selectedConversation?.fullName).replace(" ", "+")}&background=random&color=fff`;
    }}
/>

            </div>
        </div>   
        <div className={`chat-bubble text-white pb-2 ${bubbleBgColor} ${shakeClass}`}>
           {message.message}
           {message.mediaType === "image" && (
    <img
        src={`http://localhost:5000${message.mediaUrl}`}
        alt='shared media'
        className='max-w-[220px] rounded-lg mt-2'
    />
)}

{message.mediaType === "video" && (
    <video controls className='max-w-[220px] rounded-lg mt-2'>
        <source src={`http://localhost:5000${message.mediaUrl}`} />
    </video>
)}

{message.mediaType === "file" && (
    <a
        href={`http://localhost:5000${message.mediaUrl}`}
        target='_blank'
        rel='noreferrer'
        className='text-blue-300 underline block mt-2'
    >
        {message.fileName}
    </a>
)}
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 pb-2 text-white items-center'>
            {formattedTime}
        </div>
    </div>
    
  );
};

export default Message;
