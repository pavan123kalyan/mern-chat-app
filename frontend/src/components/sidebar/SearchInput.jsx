import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
 const SearchInput = () => {
	
		const [search,setSearch] = useState("");
		const {setSelectedConversation} = useConversation();
		const {conversations}=useGetConversations();
		const handleSubmit=(e)=>{
			e.preventDefault();
			if(!search)
				return;
			if (search.length<3)
			{
				return toast.error('Search term must be atleast 3 characters long ')
			}
			const conversation= conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));
			if(conversation)
			{
				setSelectedConversation(conversation);
				setSearch("");
			}
			else
			{
				toast.error("No such user found!")
			}
		};
	
 	return (
 		<form className='flex items-center gap-2' onSubmit={handleSubmit}>
  <input
    type='text'
    placeholder='Search...'
    className='input input-bordered rounded-full bg-white/80 text-gray-800 placeholder:text-gray-500 border-gray-300 dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-400 dark:border-slate-700'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <button
    type='submit'
    className='btn btn-circle bg-sky-500 hover:bg-sky-600 border-none'
  >
    <IoSearchSharp className='w-6 h-6 text-gray-900 dark:text-white outline-none' />
  </button>
</form>
 	);
 };
 export default SearchInput;