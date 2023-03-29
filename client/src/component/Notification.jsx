import { useContext } from "react"
import { SocketContext } from "../context/SocketContext"

function Notification() {
    const {answerCall, call, callAccepted} = useContext(SocketContext);
  return (
    <div>
        {call.isReceivingCall && !callAccepted && (
            <div className="">
                <h1>{call.name} is calling: </h1>
                <button onClick={answerCall}>
                    Answer
                </button>
            </div>
        )}
    </div>
  )
}

export default Notification