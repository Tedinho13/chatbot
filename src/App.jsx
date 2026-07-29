import { useState, useEffect } from 'react';

import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'


function App() {
  const [loading, setLoading] = useState("");

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem("messages")) || []);

  const handleSendMessage = (value, sender) => {
    setChatMessages(prev => [...prev, {id: crypto.randomUUID(), msg: value, sender}]);
  }

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages])

  const handleReset = () => {
    localStorage.clear();
    setChatMessages([]);
  }
  
  return (
    <div className='app-container'>
        
        <ChatMessages messages={chatMessages} loading={loading}/>
        
      <ChatInput onSendMessage={handleSendMessage} setLoading={setLoading} onReset={handleReset}/>

    </div>
  )
}

export default App;