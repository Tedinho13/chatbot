import ChatMessage from "./ChatMessage";

function ChatMessages({messages}) {
    const content = messages.map(message => <ChatMessage key={message.id} msg={message.msg} sender={message.sender} />);

    return content
}

export default ChatMessages;