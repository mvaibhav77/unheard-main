import React from "react";
import ChatInterface1 from './ChatDoc'
import {ContextProvider} from '../context/ChatContext'


const ChatHealth = () => {

  return (
    <ContextProvider>
      <ChatInterface1 type='health'/>
    </ContextProvider>
  );
};

export default ChatHealth;
