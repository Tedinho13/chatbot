import { useState } from "react";

import './ChatInput.css';

function ChatInput({onSubmit}) {
    const [inputValue, setInputValue] = useState("");

    return ( 
        <form className="form" onSubmit={(e) => onSubmit(e, inputValue)}>
            <input className="form__input" 
            type="text" value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Send message to a chatbot" />
            <button className="form__button">Send</button>
        </form>
     );
}
 
export default ChatInput;