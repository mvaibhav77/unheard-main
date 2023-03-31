import '../index.css'
// import '../assets/doctor.jpeg'
import { useContext } from 'react'
import { BsFillMicFill, BsFillMicMuteFill, BsCameraVideoFill, BsCameraVideoOffFill, BsFillSendFill } from 'react-icons/bs'
import {MdCallEnd} from 'react-icons/md'
import { SocketContext } from '../context/SocketContext'

function VideoCall() {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call, leaveCall} = useContext(SocketContext);

    console.log(stream)
    console.log(userVideo)

  return (
    <div className="video-call-container container p-3 pt-0 mx-auto border-2 border-solid border-red-600">
        <div className="video-container">
            <h1 className="font-sans ml-8  text-black py-0">One on <span className="text-red-500">One</span></h1>
            <div className="videos m-4">

                <div className="to">
                    { 
                        callAccepted && !callEnded && (
                            <video playsInline ref={userVideo} autoPlay ></video>
                        )
                    }

                </div>
                <div className={callAccepted? 'from' : 'to'}>
                {
                    stream && (
                        <video playsInline muted ref={myVideo} autoPlay ></video>
                    )
                }

                </div>
                {
                    callAccepted && (
                    <div className="controls grid grid-cols-3 gap-4">
                        <div className="mute-unmute bg-gray-600 p-2 rounded-lg point">
                            <BsFillMicFill color='white'/>
                        </div>
                        <div className="call-end p-2 bg-red-600 rounded-lg point" onClick={(e)=>{
                            leaveCall();
                            e.preventDefault();
                        }}>
                            <MdCallEnd color='white'/>
                        </div>
                        <div className="video-off-on p-2 rounded-lg bg-red-100 point">
                            <BsCameraVideoFill/>
                        </div>
                    </div>
                    )
                }
                
            </div>
        </div>
    </div>
  )
}

export default VideoCall