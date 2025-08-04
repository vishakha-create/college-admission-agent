
import React, { useState } from 'react';

function ChatUI() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const res = await fetch('http://localhost:5000/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask about admission..." />
      <button onClick={handleSend}>Send</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default ChatUI;
