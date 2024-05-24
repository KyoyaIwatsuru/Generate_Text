"use client";

import { useState } from 'react';

export function ChatComponent() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [flag, setFlag] = useState(false);

  const handleSendPrompt = async () => {
    setFlag(true);
    const result = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    if (!result.ok) {
    throw new Error('Failed to fetch data')
    }

    const data = await result.json();
    setResponse(data.message);
  };

  return (
    <div className='w-[50%]'>
      {flag &&
        <>
          <div className="chat chat-start">
            <div className="chat-header">
              You
            </div>
            <div className="chat-bubble">{prompt}</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-header">
              ChatGPT
            </div>
            <div className="chat-bubble">{response}</div>
          </div>
        </>
      }
      <div className='flex justify-center my-[5%] gap-5'>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Message ChatGPT..."
          className="input input-bordered w-full max-w-md"
        />
        <button onClick={handleSendPrompt} className="btn">Send</button>
      </div>
    </div>
  );
};
