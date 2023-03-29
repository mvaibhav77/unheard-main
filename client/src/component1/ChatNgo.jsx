import React from "react";
import { useCallback } from "react";
import VoiceContainer from "../component/VoiceContainer";
import { useNavigate } from "react-router-dom";
import MessageContainer from "../component/MessageContainer";
import Backarrow from './images/backarrow.png'

const ChatInterface = () => {
  const navigate = useNavigate();

  const onBackArrowIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/ngo-search-spare");
  }, [navigate]);

  return (
    <div className="relative bg-lavenderblush-200 w-full h-[810px] overflow-hidden text-center text-5xl text-white font-montserrat">
      <div className="absolute top-[17px] left-[65px] w-[1431px] h-[756px]">
        <img
          className="absolute top-[55px] left-[845px] w-[586px] h-[701px] object-cover"
          alt=""
          src={Backarrow}
        />
        <div className="absolute top-[583px] left-[0px] w-[420px] h-[53px]">
          <div className="absolute top-[0px] left-[211px] w-[209px] h-[53px]">
            <div className="absolute top-[-2px] left-[-2px] rounded-tl-none rounded-tr rounded-br-none rounded-bl bg-red-100 box-border w-[213px] h-[57px] border-[2px] border-solid border-white" />
            <div className="absolute top-[12px] left-[66px] font-semibold">
              NGO’s
            </div>
          </div>
          <div className="absolute top-[2px] left-[0px] w-[211px] h-[49px] text-gray-300">
            <div className="absolute top-[2px] left-[18px] font-semibold flex items-center justify-center w-44 h-11">
              Health
            </div>
            <div className="absolute top-[-2px] left-[-2px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-gainsboro-300 box-border w-[215px] h-[53px] border-[2px] border-solid border-red-100" />
          </div>
        </div>
        <div className="absolute top-[18px] left-[238px] flex flex-row items-start justify-center gap-[24px] text-red-100 font-cabin">
          <div className="relative font-semibold [backdrop-filter:blur(4px)]">
            Home
          </div>
          <div className="relative font-semibold [backdrop-filter:blur(4px)]">
            About Us
          </div>
          <div className="relative font-semibold [backdrop-filter:blur(4px)]">
            Help Support
          </div>
          <div className="relative font-semibold [backdrop-filter:blur(4px)]">
            Health Support
          </div>
          <div className="relative font-semibold [backdrop-filter:blur(4px)]">
            Features
          </div>
          <div className="relative font-semibold [backdrop-filter:blur(4px)]">
            Contact Us
          </div>
        </div>
        <VoiceContainer propLeft="0px" />
        <div className="absolute top-[0px] left-[2px] w-[167px] h-[54px] text-25xl text-gray-300">
          <div className="absolute top-[2px] left-[36px] font-semibold flex items-center justify-center w-7 h-[51px]">
            h
          </div>
          <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_83.5px)] font-semibold text-red-100">
            <span>Un</span>
            <span className="text-gray-300">eard</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-mistyrose-700 [filter:blur(100px)] w-[1280px] h-[810px]" />
      <div className="absolute top-[84px] left-[114px] w-[1051px] h-[672px] text-left text-17xl text-red-100">
        <div className="absolute top-[0px] left-[0px] w-[1051px] h-[672px]">
          <div className="absolute top-[0px] left-[0px] rounded-6xl bg-lavenderblush-100 [backdrop-filter:blur(4px)] w-[1051px] h-[672px]" />
          <div className="absolute top-[127px] left-[0px] shadow-[0px_2px_3px_rgba(218,_27,_27,_0.75)] box-border w-[1051px] h-0 border-t-[1px] border-solid border-crimson-200" />
          <div className="absolute top-[31px] left-[32px] w-[448px] h-11">
            <img
              className="absolute top-[9.6px] left-[-0.61px] w-[30.14px] h-[27.4px] cursor-pointer"
              alt=""
              src="/back-arrow.svg"
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
        <MessageContainer />
        <div className="absolute top-[615px] left-[1px] w-[1049px] h-14 text-lg text-crimson-100">
          <div
            className="absolute top-[0px] left-[0px] rounded-4xl bg-pink-100 w-[1049px] h-14 cursor-pointer"
            onClick={onRectangle9Click}
          />
          <div className="absolute top-[17px] left-[74px] font-semibold">
            lorem ipsum arpuk lsmshfk itdysl hcagjfak.
          </div>
          <img
            className="absolute top-[16px] left-[1001px] w-7 h-7 object-cover"
            alt=""
            src="/icons8paperplane100-1@2x.png"
          />
          <div className="absolute top-[10px] left-[13px] rounded-6xl bg-lavenderblush-100 [backdrop-filter:blur(4px)] w-[35px] h-[35px]" />
          <img
            className="absolute top-[13px] left-[17px] w-7 h-7"
            alt=""
            src="/plus.svg"
          />
        </div>
        <div className="absolute top-[464px] left-[1037px] rounded-mini bg-pink-300 w-[9px] h-[130px]" />
      </div>
    </div>
  );
};

export default ChatInterface;
