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
					
 				<div className={`avatar ${isOnline ? "online" : ""}`}>
  <div className='w-12 rounded-full'>
    <div
      className='w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg'
     style={{
  backgroundColor: [
    "#fca5a5",
    "#fdba74",
    "#fde68a",
    "#86efac",
    "#93c5fd",
    "#c4b5fd",
    "#f9a8d4",
    "#a7f3d0",
    "#fcd34d",
    "#bfdbfe",
  ][conversation.fullName.charCodeAt(0) % 10],
}}
    >
      {conversation.fullName
        ?.split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()}
    </div>
  </div>
</div>
 				<div className='flex flex-col flex-1 overflow-hidden'>
    <div className='flex items-center justify-between'>
        <p className='font-bold sidebar-item'>{conversation.fullName}</p>
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