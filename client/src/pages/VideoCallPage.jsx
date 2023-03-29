import React from 'react'
import VideoCall from '../component/VideoCall';
import Notification from '../component/Notification';
import CallingInterface from '../component/CallingInterface'
import { ContextProvider } from '../context/SocketContext';


function VideoCallPage() {
  return (
    <ContextProvider>
      <VideoCall />
      <CallingInterface>
        <Notification/>
      </CallingInterface>
    </ContextProvider>
  )
}

export default VideoCallPage