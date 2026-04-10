import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import useConversation from "../../zustand/useConversation"; // 1. Import the hook

const Sidebar = () => {
    // 2. Getting the state from the store
    const { selectedConversation } = useConversation();

    return (
        // 3. Applying conditional classes here
        <div 
            className={`border-r border-slate-500 p-4 flex flex-col 
                       ${selectedConversation ? "hidden sm:flex" : "flex"}`}
        >
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />
        </div>
    );
};
export default Sidebar;