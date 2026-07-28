import { useState, useEffect } from 'react';

import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'


function App() {
  const [loading, setLoading] = useState("");

  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = (value, sender) => {
    setChatMessages(prev => [...prev, {id: crypto.randomUUID(), msg: value, sender}]);
  }
  
  return (
    <div className='app-container'>
        
        <ChatMessages messages={chatMessages} loading={loading}/>
        
      <ChatInput onSendMessage={handleSendMessage} setLoading={setLoading}/>

    </div>
  )
}

export default App;