import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
const Conversation = ({conversation,lastIdx,emoji}) => {
	const {selectedConversation,setSelectedConversation} = useConversation();
	const isSelected = selectedConversation?._id ===conversation._id;
	const {onlineUsers} = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

 	return (
 		<>
 			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected?"bg-sky-500":"" }`}
				onClick ={()=>setSelectedConversation(conversation)} 
			>
					
 				<div className= {`avatar ${isOnline ? "online" : "" }`} >
 					<div className='w-12 rounded-full'>
 						
						<img
    src={
        conversation.profilepic ||
        `https://ui-avatars.com/api/?name=${conversation.fullName.replace(" ", "+")}&background=random&color=fff`
    }
    alt='user avatar'
    onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://ui-avatars.com/api/?name=${conversation.fullName.replace(" ", "+")}&background=random&color=fff`;
    }}
/>

 					</div>
 				</div>

 				<div className='flex flex-col flex-1 overflow-hidden'>
    <div className='flex items-center justify-between'>
        <p className='font-bold text-gray-200 truncate'>
            {conversation.fullName}
        </p>
        <span className='text-xl ml-2'>{emoji}</span>
    </div>

    <div className='flex items-center justify-between mt-1'>
        <p className='text-sm text-gray-400 truncate max-w-[160px]'>
            {conversation.lastMessage ? conversation.lastMessage : ""}
        </p>

       {conversation.lastMessage && conversation.lastMessageTime && (
    <span className='text-[10px] text-gray-400 ml-2 whitespace-nowrap'>
        {new Date(conversation.lastMessageTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })}
    </span>
)}
    </div>
</div>

 			</div>
			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
 		</>
 	);
 };
 export default Conversation;