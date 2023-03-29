import { useCallback } from "react";
import React from "react";
import VoiceContainer from "../component/VoiceContainer";
import { useNavigate } from "react-router-dom";
import PatientDetailContainer from "../component/PatientDetailContainer";

const VIDEOCALL6 = () => {
  const navigate = useNavigate();

  const onIcons8Call1001Click = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onVideoContainerClick = useCallback(() => {
    navigate("/video-call4");
  }, [navigate]);

  const onLineIconClick = useCallback(() => {
    navigate("/video-call");
  }, [navigate]);

  const onIcons8ChatMessages961Click = useCallback(() => {
    navigate("/video-call");
  }, [navigate]);

  return (
    <div className="relative bg-lavenderblush-200 w-full h-[810px] overflow-hidden text-center text-5xl text-white font-montserrat">
      <div className="absolute top-[19px] left-[52px] w-[1444px] h-[754px]">
        <img
          className="absolute top-[53px] left-[858px] w-[586px] h-[701px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[581px] left-[13px] w-[420px] h-[53px]">
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
        <VoiceContainer propLeft="13px" />
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
      <div className="absolute top-[0px] left-[0px] bg-mistyrose-700 [filter:blur(100px)] w-[1280px] h-[810px]" />
      <div className="absolute top-[72px] left-[88px] w-[1104.18px] h-[706px] text-left text-25xl text-gray-200">
        <div className="absolute top-[0px] left-[0px] rounded-6xl bg-white [backdrop-filter:blur(4px)] w-[1104.18px] h-[706px]" />
        <div className="absolute top-[81px] left-[136px] w-[955px] h-[600px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro-200 w-[600px] h-[600px]" />
          <div className="absolute top-[104px] left-[612px] rounded-xl bg-gainsboro-200 w-[343px] h-[490px]" />
          <div className="absolute top-[526px] left-[194px] w-[211px] h-[57px]">
            <div className="absolute top-[0px] left-[77px] shadow-[0px_0.5px_1px_#fff4f6] [backdrop-filter:blur(4px)] w-[57px] h-[57px]">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-red-100 w-[57px] h-[57px]" />
              <img
                className="absolute top-[10px] left-[9px] w-10 h-9 object-cover cursor-pointer"
                alt=""
                src="/icons8call100-1@2x.png"
                onClick={onIcons8Call1001Click}
              />
            </div>
            <div
              className="absolute top-[0px] left-[154px] w-[57px] h-[57px] cursor-pointer"
              onClick={onVideoContainerClick}
            >
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-mistyrose-200 shadow-[0px_0.5px_1px_#e14343] [backdrop-filter:blur(4px)] w-[57px] h-[57px]" />
              <img
                className="absolute top-[11px] left-[11px] w-[35px] h-[35px] object-cover"
                alt=""
                src="/icons8videocall100-1@2x.png"
              />
            </div>
            <div className="absolute top-[-1px] left-[0px] w-[57px] h-[57px]">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-mistyrose-200 shadow-[0px_0.5px_1px_#e14343] [backdrop-filter:blur(4px)] w-[57px] h-[57px]" />
              <img
                className="absolute top-[8px] left-[9px] w-10 h-10 object-cover"
                alt=""
                src="/icons8audiorecordinglogotypeofamicrophonelayout96-1@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] rounded-mini bg-gray-500 w-[57px] h-[57px]" />
              <img
                className="absolute top-[9.98px] left-[9.41px] w-[40.57px] h-[39.6px] cursor-pointer"
                alt=""
                src="/line-12.svg"
                onClick={onLineIconClick}
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[23px] left-[136px] font-semibold flex items-center w-[391px] h-[46px]">
          <span className="[line-break:anywhere] w-full">
            <span>One on</span>
            <span className="text-black">{` `}</span>
            <span className="text-red-100">One</span>
          </span>
        </div>
        <div className="absolute top-[1px] left-[1px] w-[94px] h-[704px]">
          <div className="absolute top-[0px] left-[0px] rounded-tl-4xl-5 rounded-tr-none rounded-br-none rounded-bl-4xl-5 bg-red-300 w-[94px] h-[704px]" />
          <img
            className="absolute top-[17px] left-[27px] w-10 h-10 object-cover"
            alt=""
            src="/icons8add67-1@2x.png"
          />
          <img
            className="absolute top-[634px] left-[27px] w-10 h-10 object-cover"
            alt=""
            src="/icons8wavey60-1-1@2x.png"
          />
          <img
            className="absolute top-[73px] left-[25px] w-[45px] h-[45px] object-cover cursor-pointer"
            alt=""
            src="/icons8chatmessages96-1@2x.png"
            onClick={onIcons8ChatMessages961Click}
          />
        </div>
        <PatientDetailContainer propTop="56px" />
      </div>
    </div>
  );
};

export default VIDEOCALL6;
