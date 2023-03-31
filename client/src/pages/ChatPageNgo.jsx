import React from 'react'
import {ContextProvider} from '../context/ChatContext'
import ChatInterface1 from '../component1/ChatDoc'

function ChatPageNgo() {
  return (
    <ContextProvider>
        <ChatInterface1 type='ngo'/>
    </ContextProvider>
  )
}

export default ChatPageNgo