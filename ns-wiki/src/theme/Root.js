import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'http://20.199.85.40:3001/embed/anythingllm-chat-widget.min.js';
    script.async = true;
    script.setAttribute('data-embed-id', 'cd4cb257-a5c4-4fff-8bc6-0010f39a3a6f');
    script.setAttribute('data-base-api-url', 'http://20.199.85.40:3001/api/embed');
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {children}
      <anythingllm-chat></anythingllm-chat>
    </>
  );
}
