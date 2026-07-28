import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";
import Spinner from '../assets/loading-spinner.gif'

import './ChatMessages.css';

function ChatMessages({messages, loading}) {

    const content = messages.length > 0 ? messages.map(message => <ChatMessage key={message.id} msg={message.msg} sender={message.sender} />) : <p className="welcome-message">"Welcome to the chatbot project! Send a message using the textbox below"</p>;

    const messagesContainerRef = useRef(null);

    useEffect(() => {
       const messagesContainer = messagesContainerRef.current;
       if(messagesContainer) {
       messagesContainer.scrollTop = messagesContainer.scrollHeight;
       }    
    }, [messages])

    return (
        <div className="messages-container" ref={messagesContainerRef}>
            {content}
            {loading ? <div className='message'><img className="message__spinner" src={Spinner}></img></div> : ""}
        </div>
    )
}

export default ChatMessages;