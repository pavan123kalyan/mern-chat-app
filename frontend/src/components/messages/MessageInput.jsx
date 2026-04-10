import { BsSend } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa";
import { useState } from "react";
import useSendMessages from "../../hooks/useSendMessages";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const [media, setMedia] = useState(null);

    const { loading, sendMessage } = useSendMessages();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message && !media) return;

        await sendMessage(message, media);

        setMessage("");
        setMedia(null);
    };

    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative flex items-center gap-2'>
                <label className='cursor-pointer text-gray-300 text-lg'>
                    <FaPaperclip />
                    <input
                        type='file'
                        className='hidden'
                        onChange={(e) => setMedia(e.target.files[0])}
                    />
                </label>

                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                />

                <button
                    type='submit'
                    className='absolute inset-y-0 end-0 flex items-center pe-3'
                >
                    {loading ? (
                        <span className='loading loading-spinner'></span>
                    ) : (
                        <BsSend />
                    )}
                </button>
            </div>

            {media && (
                <div className='text-xs text-gray-300 mt-2 truncate'>
                    Selected: {media.name}
                </div>
            )}
        </form>
    );
};

export default MessageInput;