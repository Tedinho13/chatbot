import { useState } from 'react';

import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {

  const [chatMessages, setChatMessages] = useState([{id: 1, msg:"Hello bot", sender:"user"}, {id: 2, msg:"Hi. What can I help you?", sender:"ai"}, {id: 3, msg:"Tell me what date we have", sender: "user"}, {id: 4, msg: "Today is 23 July", sender: "ai"}, {id: 5, msg: "Maybe you could flip a coin", sender: "user"}]);

  const handleSendMessage = (e, value) => {
    e.preventDefault();
    setChatMessages(prev => [...prev, {id: crypto.randomUUID(), msg: value, sender: "user"}]);
  }
  
  return (
    <>
      <ChatInput onSubmit={handleSendMessage}/>
      <div className="messages-container">
        <ChatMessages messages={chatMessages}/>
      </div>

    </>
  )
}

export default App;