import { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../context/SocketContext';



function CallingInterface({children}) {
    const { me, name, setName, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('')

  return (
    <div className="container mx-auto options-container bg-red-300 rounded-xl m-5">
        <form className='mt-6 grid grid-cols-2 gap-8'>
            <div className="form-section grid grid-rows-2 gap-8">
                <h1 className='text-4xl'>Account Info</h1>
                <input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value)
                }}
                className="form-input px-4 pu-3 rounded-xl bg-red-300 border-0" />
                <CopyToClipboard text={me}>
                    <button className="copy-clipboard btn bg-red-800 text-center text-white" onClick={(e)=> e.preventDefault()}>
                        Copy your Id
                    </button>
                </CopyToClipboard>

            </div>
            <div className="grid grid-rows-2 gap-8">
                <h1 className='text-4xl'>Make a call</h1>
                <input type="text" value={idToCall} onChange={(e)=>{
                    setIdToCall(e.target.value);
                }} className="form-input px-4 pu-3 rounded-xl bg-red-300 border-0 " />
                <button className="btn bg-red-800 text-center text-white" onClick={(e)=>{
                    callUser(idToCall);
                    e.preventDefault();
                }}>
                    Call
                </button>


            </div>
        </form>
        {children}
    </div>
  )
}

export default CallingInterface