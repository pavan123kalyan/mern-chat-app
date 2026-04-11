import { useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import useConversation from "../../zustand/useConversation";

const Sidebar = () => {
  const { selectedConversation } = useConversation();

  return (
    <div
      className={`
        ${selectedConversation ? "hidden sm:flex" : "flex"}
        border-r border-slate-500 p-4 flex-col w-full sm:w-[35%] md:w-[30%] lg:w-[28%] h-full overflow-hidden
      `}
    >
      <SearchInput />

      <div className='divider px-3'></div>

      <div className='py-2 flex flex-col overflow-y-auto flex-1'>
        <Conversations />
      </div>

      <LogoutButton />
    </div>
  );
};

export default Sidebar;