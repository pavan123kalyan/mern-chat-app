import React from 'react';
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation';
import { useState } from 'react';
const useSendMessages = () => {
  const [loading,setLoading] = useState(false);
  const {messages,setMessages,selectedConversation}=useConversation();

  const sendMessage = async (message, media = null) => {
    setLoading(true);

    try {
        const formData = new FormData();
        formData.append("message", message);

        if (media) {
            formData.append("media", media);
        }

        const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (data.error) throw new Error(data.error);

        setMessages([...messages, data]);
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
};
  return {loading,sendMessage}
}

export default useSendMessages
