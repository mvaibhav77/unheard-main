import { io } from 'socket.io-client';
import { createContext, useEffect, useState } from 'react';

const  SocketContext = createContext();
const socket = io('https://unheard-backend-2igb.onrender.com');



const ContextProvider = ({children})=>{
    const [msg, setMsg] = useState('');
    const[type,setType] = useState('');

    useEffect(()=>{
            socket.on("message", (msg)=>{
                displayMsg("assistant", msg);
            })

    },[])

    const msgSend = (msg)=>{

        displayMsg("user", msg);

        if(type==='ngo'){
            socket.emit("sendMessageNgo", msg, (error)=>{
                if (error) {
                    return alert(error);
                }
            })
        }else{
            socket.emit("sendMessageHealth", msg, (error)=>{
                if (error) {
                    return alert(error);
                }
            })
        }

    }

    const list =["Aged/Elderly",
   "Any Other",
    "Children",
    "Civic Issues",
    "Dalit Upliftment",
    "Differently Abled",
    "Education & Literacy",
    "HIV/AIDS",
    "Health & Family Welfare",
    "Human Rights",
    "Labour & Employment",
    "Legal Awareness & Aid",
    "Minority Issues",
    "Panchayati Raj",
    "Prisoner's Issues",
    "Right to Information & Advocacy",
    "Rural Development & Poverty Alleviation",
    "Sports",
    "Tourism",
    "Tribal Affairs",
    "Urban Development & Poverty Alleviation",
    "Women's Development & Empowerment",
    "Youth Affairs"]

    function displayMsg(role, message) {
        const messages = document.getElementById("messages");
        const div = document.createElement("div");
        if(role !== "user"){
            list.forEach((item)=>{
                if(message.includes(item)){
                    div.innerHTML = `<b>Assistant:</b><a href="/ngo-search-spare1?query=${item.toLowerCase()}"> ${item}</p>`;

                }
            })
        }else{
            div.innerHTML = `<p><b>You:</b> ${message}</p>`;
        }

        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    return(
        <SocketContext.Provider value={{ msg, setMsg, msgSend, setType
        }}>
            {children}
        </SocketContext.Provider>
    )



}

export {ContextProvider, SocketContext}