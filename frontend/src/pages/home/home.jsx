import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <div
        className='h-full w-full flex glass-container rounded-none md:rounded-none border-0'
      >
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
}