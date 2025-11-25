import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'http://172.16.0.5:3001/embed/anythingllm-chat-widget.min.js';
    script.async = true;
    script.setAttribute('data-embed-id', '85284776-c5d3-46af-a1f2-e6e7e5da8c3e');
    script.setAttribute('data-base-api-url', 'http://172.16.0.5:3001/api/embed');
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {children}
      <anythingllm-chat></anythingllm-chat>
    </>
  );
}