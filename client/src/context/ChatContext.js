import { io } from 'socket.io-client';
import { createContext, useEffect, useState } from 'react';

const  SocketContext = createContext();
const socket = io('https://unheard-backend-2igb.onrender.com');
// const socket = io('http://localhost:5000/');




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

    const listNGO =["Aged/Elderly",
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

    const listHealth=["Clinical Psychology",
        "Mental Disorder Counselling",
        "Physical and Mental Health Counselling",
        "Practicing",
        "Psychiatry",
        "Psychology",
        "Psychology and Homoeopathy",
        "Dietician",
        "Dietician and Nutritionist",
        "Dieticians and Therapeutic Neutrionist",
        "Food and Nutrition",
        "Nutrition and Dietetics",
        "Nutrition and Dietician",
        "Ph.D. in Food & Nutrition",
        "Weight Loss & Obesity",
        "Artificial Insemination and Infertility Specialist",
        "Family Planning",
        "General Medicine",
        "Gynecology",
        "Gynecology",
        "Gynaecology and IVF",
        "Gynecology and IVF Specialist",
        "Gynecology and Infertility",
        "Gynecology and Lady Doctor",
        "Gynaecology and Obstetrics",
        "Gynecology",
        "Gynecology",
        "Gynaecology",
        "Gynecology and Laparoscopic surgery",
        "IUI",
        "IVF",
        "Infertility",
        "Infertility and Obstetrics",
        "Obstetrics",
        "Obstetrics and Gynaecology",
        "Obstetrics and Gynaecology)",
        "Child Specialist",
        "Neonatology",
        "Paediatrics and Neonatology"
        ]

    function displayMsg(role, message) {
        const messages = document.getElementById("messages");
        const div = document.createElement("div");
        let flag=0;
        if(role !== "user"){
            listNGO.forEach((item)=>{
                if(message.includes(item)){
                    flag=1;
                    div.innerHTML = `<b>Assistant:</b><a href="/ngo-search-spare1?query=${item.toLowerCase()}"> ${item}</a>`;
                }else if(flag ===0 && !message.includes(item)){
                    div.innerHTML = `<b>Assistant:</b> ${message} `;
                }
            })
            listHealth.forEach((item)=>{
                if(message.includes(item)){
                    flag=1;
                    div.innerHTML = `<b>Assistant:</b><a href="/doctors-search-details1?query=${item.toLowerCase()}"> ${item}</a>`;
                }else if(flag ===0 && !message.includes(item)){
                    div.innerHTML = `<b>Assistant:</b> ${message} `;
                }
            })
        }else{
            div.innerHTML = `<p><b>You:</b> ${message}</p>`;
        }

        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
        flag=0;
    }

    return(
        <SocketContext.Provider value={{ msg, setMsg, msgSend, setType
        }}>
            {children}
        </SocketContext.Provider>
    )



}

export {ContextProvider, SocketContext}