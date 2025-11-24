import React from 'react';

export default function Root({ children }) {
  return (
    <>
      {children}
      <anythingllm-chat workspace="Docusaurus"></anythingllm-chat>
    </>
  );
}
