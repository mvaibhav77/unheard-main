import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Backarrow from './images/backarrow.png';
import Ellipse from './images/ellipse.png';

const DCyberContainer = ({name,regId,works,loc}) => {
  const navigate = useNavigate();

  const onBackArrowIconClick = useCallback(() => {
    navigate("/ngo-search1");
  }, [navigate]);

  return (
    <div className="absolute top-[148px] left-[121px] w-[1037px] h-[676px] text-left text-5xl text-gray-300 font-montserrat">
      <div className="absolute top-[0px] left-[0px] rounded-t-16xl rounded-b-none bg-gray-400 [backdrop-filter:blur(4px)] w-[1037px] h-[676px] flex flex-col py-0 px-[33px] box-border items-end justify-end">
        <div className="relative rounded-t-16xl rounded-b-none bg-mistyrose-300 [backdrop-filter:blur(4px)] box-border w-[970px] h-[666px] shrink-0 border-t-[1px] border-solid border-red-200 border-r-[1px] border-l-[1px]" />
      </div>
      <div className="absolute top-[74px] left-[102px] w-[833px] h-[574px]">
        <div className="absolute top-[73px] left-[1px] w-[832px] h-[492px]">
          <div className="absolute top-[0px] left-[0px] w-[831px] h-[233px] flex flex-col items-start justify-start gap-[7px]">
            <div className="relative font-semibold">Works in</div>
            <div className="rounded-tl-none rounded-tr-11xl rounded-b-11xl bg-lavenderblush-200 w-[831px] h-[197px] shrink-0 flex flex-col items-center justify-center text-sm">
              <div className="relative font-semibold inline-block w-[761px] h-[155px] shrink-0">{works}</div>
            </div>
          </div>
          <div className="absolute top-[260px] left-[0px] w-[832px] h-[95px]">
            <div className="absolute top-[0px] left-[0px] font-semibold">{`Registration ID `}</div>
            <div className="absolute top-[36px] left-[0px] rounded-tl-none rounded-tr-11xl rounded-b-11xl bg-lavenderblush-200 w-[831px] h-[59px]" />
            <div className="absolute top-[43px] left-[25px] w-[457px] h-11 flex flex-col py-0 px-[5px] box-border items-start justify-center text-sm">
              <div className="relative font-semibold">
                {regId}
              </div>
            </div>
          </div>
          <div className="absolute top-[379px] left-[0px] w-[832px] h-[113px]">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              Location
            </div>
            <div className="absolute top-[36px] left-[0px] rounded-tl-none rounded-tr-11xl rounded-b-11xl bg-lavenderblush-200 w-[831px] h-[77px]" />
            <div className="absolute top-[49px] left-[27px] text-sm font-semibold">
              <p className="[margin-block-start:0] [margin-block-end:2px]">{loc}</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-7px] left-[0px] flex flex-row items-center justify-start gap-[34px] text-center text-xl text-red-100">
          <img
            className="relative w-[35.68px] h-[32.4px] shrink-0 cursor-pointer"
            alt=""
            src={Backarrow}
            onClick={onBackArrowIconClick}
          />
          <div className="relative font-semibold">{name}</div>
        </div>
      </div>
      <img
        className="absolute top-[26px] left-[948px] w-[38px] h-[38px]"
        alt=""
        src={Ellipse}
      />
    </div>
  );
};

export default DCyberContainer;
