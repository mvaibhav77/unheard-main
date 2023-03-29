import { useCallback } from "react";
import React from "react";
import VoiceContainer from "../component/VoiceContainer";
import { useNavigate } from "react-router-dom";
import PatientDetailContainer from "../component/PatientDetailContainer";
import ChatContainer from "../component/ChatContainer";
import VideoCallPage from "../pages/VideoCallPage";
import '../index.css';

const VIDEOCALL = () => {;

  return (
    <>
        <div className="relative bg-lavenderblush-200 w-full overflow-hidden text-center text-5xl text-white font-montserrat">
      <div className="absolute top-[19px] left-[52px] w-[1444px] h-[754px]">
        {/* <img
          className="absolute top-[53px] left-[858px] w-[586px] h-[701px] object-cover"
          alt=""
          src="/image@2x.png"
        /> */}
        <div className="absolute top-[16px] left-[251px] flex flex-row items-start justify-center gap-[24px] text-red-100 font-cabin">
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
        {/* <VoiceContainer propLeft="13px" /> */}
        <div className="absolute top-[0px] left-[0px] w-[167px] h-[54px] text-25xl text-gray-300">
          <div className="absolute top-[2px] left-[36px] font-semibold flex items-center justify-center w-7 h-[51px]">
            h
          </div>
          <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_83.5px)] font-semibold text-red-100">
            <span>Un</span>
            <span className="text-gray-300">eard</span>
          </div>
        </div>
      </div>
        <VideoCallPage/>
      {/* <div className="absolute top-[0px] left-[0px] bg-mistyrose-700 [filter:blur(100px)] w-[1280px] h-[810px]" /> */}
    </div>
    </>

  );
};

export default VIDEOCALL;
