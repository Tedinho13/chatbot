import { useState } from "react";

import './ChatInput.css';
import '../data/chatbot';

function ChatInput({onSendMessage, setLoading}) {
    const [inputValue, setInputValue] = useState("");
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        onSendMessage(inputValue, "user");
        setInputValue("");

        try {
        setLoading(true);
        const res = await Chatbot.getResponseAsync(inputValue);
        onSendMessage(res, "ai");
    }   finally {
        setLoading(false);
    }

    }

    return ( 
        <form className="form" onSubmit={handleSubmit}>
            <input className="form__input" 
            type="text" value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Send message to a chatbot" />
            <button className="form__button">Send</button>
        </form>
     );
}
 
export default ChatInput;