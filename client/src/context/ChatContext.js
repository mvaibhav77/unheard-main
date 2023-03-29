import { io } from 'socket.io-client';
import { createContext, useEffect, useState } from 'react';

const  SocketContext = createContext();
const socket = io('http://localhost:5000');



const ContextProvider = ({children})=>{
    const [msg, setMsg] = useState('');

    useEffect(()=>{

        socket.on("message", (msg)=>{
            displayMsg("assistant", msg);
        })
    },[])

    const msgSend = (msg)=>{

        displayMsg("user", msg);

        socket.emit("sendMessage", msg, (error)=>{
            if (error) {
                return alert(error);
            }

            // setMsg("");
        })

    }

    function displayMsg(role, message) {
        console.log(message);
        const messages = document.getElementById("messages");
        const div = document.createElement("div");
        div.innerHTML = `<p><b>${
            role === "user" ? "You" : "Assistant"
        }:</b> ${message}</p>`;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    return(
        <SocketContext.Provider value={{ msg, setMsg, msgSend
        }}>
            {children}
        </SocketContext.Provider>
    )



}

export {ContextProvider, SocketContext}