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
    <div className="video-call-container container p-3 mx-auto grid grid-cols-1 lg:grid-cols-6 border-2 border-solid border-red-600">
        <div className="video-container col-span-4">
            <h1 className="font-sans ml-8 font-big">One on <span className="text-red-500">One</span></h1>
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
        <div className="side-container col-span-2 py-1">
            <div className="to-info border-1 border-solid border-red-600 grid grid-cols-3 bg-red-200 p-5">
                <div className="to-img"></div>
                <div className="details col-span-2 flex flex-col">
                    <div className="name">{call.name || call.from || 'NAME'} </div>
                    {/* <div className="identification">MBBS, MD</div> */}
                </div>
            </div>
            <div className="chat-container bg-red-100 mt-3 pt-5 px-2">
                <div className="messages">
                    <div className="message to">Hello there</div>
                    <div className="message from">hi</div>
                    <div className="message to">How have you been?</div>
                </div>
                <form className="input_msg grid grid-cols-10 my-2 bg-red-200">
                    <input type="text" className='col-span-8 p-1 pl-2 bg-red-200'/>
                    <button className='p-2 col-span-2 text-2xl'>
                        <BsFillSendFill />
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default VideoCall