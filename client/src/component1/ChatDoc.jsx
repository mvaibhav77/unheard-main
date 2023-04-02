import { useCallback, useContext, useEffect } from "react";
import React from "react";
import VoiceContainer from "../component/VoiceContainer";
import { useNavigate } from "react-router-dom";
import MessageContainer from "../component/MessageContainer";
import Plus from "./images/plus.png"
import Landpic from "./images/landpic.png"
import Backarrow from "./images/backarrow.png"
import { SocketContext } from "../context/ChatContext.js";
import '../index.css'
import Ellipse from'./images/ellipse.png'
import NavigationContainer from "../component/NavigationContainer";

const ChatInterface1 = ({type}) => {
  const navigate = useNavigate();

  const onBackArrowIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/doctors-search-details");
  }, [navigate]);

  const {msg, setMsg, msgSend, setType} = useContext(SocketContext);


  useEffect(()=>{
    setType(type)
  },[])

  return (
    <div className="relative bg-lavenderblush-200 w-full h-[1200px] overflow-hidden text-center text-5xl text-gray-300 font-montserrat">
      <div className="absolute top-[17px] left-[65px] w-[1431px] h-[756px]">
        <img
          className="absolute top-[55px] left-[845px] w-[586px] h-[701px] object-cover"
          alt=""
          src={Landpic}
        />
        <div className="absolute top-[583px] left-[0px] w-[420px] h-[53px]">
          <textarea className="[border:none] bg-[transparent] font-semibold font-montserrat text-5xl absolute top-[0px] left-[211px] w-[209px] h-[53px]" />
          <div className="absolute top-[2px] left-[0px] w-[211px] h-[49px]">
            <div className="absolute top-[2px] left-[18px] font-semibold flex items-center justify-center w-44 h-11">
              Health
            </div>
            <div className="absolute top-[-2px] left-[-2px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-gainsboro-300 box-border w-[215px] h-[53px] border-[2px] border-solid border-red-100" />
          </div>
        </div>
       
        <VoiceContainer />
       <div className="relative top-[0px] left-[0px] bg-mistyrose-700 [filter:blur(100px)] w-[1280px] h-[810px]" />
      
        <NavigationContainer />

        <div className="absolute top-[0px] left-[2px] w-[167px] h-[54px] text-25xl">
          <div className="absolute top-[2px] left-[36px] font-semibold flex items-center justify-center w-7 h-[51px]">
            h
          </div>
          <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_83.5px)] font-semibold text-red-100">
            <span>Un</span>
            <span className="text-gray-300">eard</span>
          </div>
        </div>
      </div>
      
     
      <div className="relative top-[84px] left-[114px] w-[1051px] h-[672px] text-left text-17xl text-red-100">
        <div className="absolute top-[0px] left-[0px] w-[1051px] h-[672px]">
          <div className="absolute top-[0px] left-[0px] rounded-6xl bg-lavenderblush-100 [backdrop-filter:blur(4px)] w-[1051px] h-[672px]" />
          <div className="absolute top-[127px] left-[0px] shadow-[0px_2px_3px_rgba(218,_27,_27,_0.75)] box-border w-[1051px] h-0 border-t-[1px] border-solid border-crimson-200" />
          <div className="relative top-[31px] left-[32px] w-[448px] h-11">
            
            <img
              className="absolute top-[9.6px] left-[-0.61px] w-[30.14px] h-[27.4px] cursor-pointer"
              alt=""
              src={Backarrow}
              onClick={onBackArrowIconClick}
            />
            <div className="absolute top-[0px] left-[53px] font-semibold">
              <span>Un</span>
              <span className="text-gray-300">said - The Chat</span>
              <span>Bot</span>
            </div>
          </div>
          <div className="absolute top-[75px] left-[89px] text-base font-semibold text-gray-300">
            Let me help you with your problems!!
          </div>
        </div>

{/* main-chat container */}
        <div id="chat-container" className="relative rounded-md top-[140px] left-[10px] h-[520px] w-[1000px] text-lg text-crimson-100">
      <div id="messages h-[500px] " className="h-[650px]  "></div>
      <form id="message-form">
        <input className="bg-lavenderblush-100" type="text" id="message-input" placeholder="Type your message " onChange={(e)=>setMsg(e.target.value)} autoComplete="off" />
        <button className="bg-red-100" type="submit" onClick={(e)=>{
          e.preventDefault();
          msgSend(msg)
        }}>Send</button>
      </form>
    </div>

        {/* <MessageContainer /> */}
        {/* <div className="absolute top-[615px] left-[1px] w-[1049px] h-14 text-lg text-crimson-100">
          <div
            className="absolute top-[0px] left-[0px] rounded-4xl bg-pink-100 w-[1049px] h-14 cursor-pointer"
            onClick={onRectangle8Click}
          />
          <div className="absolute top-[17px] left-[74px] font-semibold">
            lorem ipsum arpuk lsmshfk itdysl hcagjfak.
          </div> */
          <img
            className="absolute top-[16px] left-[1001px] w-7 h-7 object-cover"
            alt=""
            src={Ellipse}
          />
        /*<div className="absolute top-[10px] left-[13px] rounded-6xl bg-lavenderblush-100 [backdrop-filter:blur(4px)] w-[35px] h-[35px]" />
          <img
            className="absolute top-[13px] left-[17px] w-7 h-7"
            alt=""
            src={Plus}
          />
        </div> 
        {/* <div className="absolute top-[464px] left-[1037px] rounded-mini bg-pink-300 w-[9px] h-[130px]" /> */}
      </div>

    </div>
  );
};

export default ChatInterface1;
