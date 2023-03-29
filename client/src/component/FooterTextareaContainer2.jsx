import React from "react";
import { useCallback } from "react";
import ContactForm from "./ContactForm";
import { useNavigate } from "react-router-dom";

const FooterTextareaContainer2 = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="absolute top-[2205px] left-[0px] w-[1280px] h-[528px] text-center text-51xl text-black font-montserrat">
      <img
        className="absolute top-[0px] left-[0px] w-[1280px] h-[528px]"
        alt=""
        src="/background1.svg"
      />
      <div className="absolute top-[39px] left-[71px] w-[265px] h-[85.06px] text-gray-300">
        <div className="absolute top-[0px] left-[55.06px] font-semibold">h</div>
        <div className="absolute top-[calc(50%_-_42.47px)] left-[calc(50%_-_132.5px)] font-semibold text-red-100">
          <span>Un</span>
          <span className="text-gray-300">eard</span>
        </div>
      </div>
      <div className="absolute top-[484px] left-[0px] w-[1280px] h-11 text-xl font-brawler">
        <div className="absolute top-[0px] left-[0px] bg-lavenderblush-200 w-[1280px] h-11" />
        <div className="absolute top-[9px] left-[453px] flex items-center justify-center w-[374px] h-[26.63px]">
          @copyright.Inc
        </div>
      </div>
      <div className="absolute top-[41.6px] left-[639.6px] [backdrop-filter:blur(4px)] box-border w-[2.8px] h-[413.8px] border-r-[2.8px] border-solid border-lavenderblush-200" />
      <div className="absolute top-[43px] left-[707px] w-[505px] h-[402px] text-5xl">
        <ContactForm />
        <div className="absolute top-[358px] left-[0px] w-40 h-11">
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-lavenderblush-200 shadow-[0px_1px_2px_rgba(215,_9,_8,_0.7)] [backdrop-filter:blur(4px)] w-40 h-11" />
          <div className="absolute top-[10px] left-[17px] font-semibold flex items-center justify-center w-[126px] h-[25px]">
            Send
          </div>
        </div>
      </div>
      <div
        className="absolute top-[137px] left-[71px] flex flex-col items-start justify-center gap-[12px] cursor-pointer text-left text-9xl text-red-100 font-cabin"
        onClick={onFrameContainer2Click}
      >
        <div className="relative font-semibold flex items-center w-[120px] [backdrop-filter:blur(4px)]">
          Home
        </div>
        <div className="relative font-semibold flex items-center w-[159px] [backdrop-filter:blur(4px)]">
          About Us
        </div>
        <div className="relative font-semibold flex items-center w-[184px] [backdrop-filter:blur(4px)]">
          Help Support
        </div>
        <div className="relative font-semibold flex items-center w-[241px] [backdrop-filter:blur(4px)]">
          Health Support
        </div>
        <div className="relative font-semibold flex items-center w-[159px] [backdrop-filter:blur(4px)]">
          Blogs
        </div>
        <div className="relative font-semibold flex items-center w-[184px] [backdrop-filter:blur(4px)]">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default FooterTextareaContainer2;
