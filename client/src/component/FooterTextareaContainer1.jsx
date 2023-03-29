import React from "react";
import { useCallback } from "react";
import ContactForm from "./ContactForm";
import Background from'./images/background.png'



const FooterTextareaContainer1 = () => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='land1Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='land2Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHelpSupportTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='land3Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHealthSupportTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='land4Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBlogsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='land5Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="absolute top-[4405.59px] left-[0px] w-[1280px] h-[528px] text-center text-41xl text-gray-300 font-montserrat">
      <img
        className="absolute top-[0px] left-[0px] w-[1280px] h-[528px]"
        alt=""
        src={Background}
        data-scroll-to="background"
      />
      <div className="absolute top-[43px] left-[711px] w-[505px] h-[400.47px]">
        <ContactForm />
        <div className="absolute top-[358.41px] left-[0px] rounded-mini bg-lavenderblush-200 shadow-[0px_1px_2px_rgba(215,_9,_8,_0.7)] [backdrop-filter:blur(4px)] w-40 h-11" />
        <div className="absolute top-[368.41px] left-[17px] text-5xl font-semibold text-black flex items-center justify-center w-[126px] h-[25px]">
          Send
        </div>
      </div>
      <div className="absolute top-[39px] left-[71px] w-[265px] h-[86.06px] text-51xl">
        <div className="absolute top-[0.21px] left-[55px] font-semibold">h</div>
        <div className="absolute top-[calc(50%_-_42.5px)] left-[calc(50%_-_132.5px)] font-semibold text-red-100">
          <span>Un</span>
          <span className="text-gray-300">eard</span>
        </div>
      </div>
      <div className="absolute top-[141px] left-[71px] flex flex-col items-start justify-center gap-[12px] text-left text-9xl text-red-100 font-cabin">
        <div
          className="relative font-semibold flex items-center w-[125px] [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onHomeTextClick}
        >
          Home
        </div>
        <div
          className="relative font-semibold flex items-center w-[172px] [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onAboutUsTextClick}
        >
          About Us
        </div>
        <div
          className="relative font-semibold flex items-center w-[228px] [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onHelpSupportTextClick}
        >
          Help Support
        </div>
        <div
          className="relative font-semibold flex items-center w-64 [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onHealthSupportTextClick}
        >
          Health Support
        </div>
        <div
          className="relative font-semibold flex items-center w-[143px] [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onBlogsTextClick}
        >
          Blogs
        </div>
        <div className="relative font-semibold flex items-center w-[184px] [backdrop-filter:blur(4px)]">
          Contact Us
        </div>
      </div>
      <div className="absolute top-[484px] left-[0px] bg-lavenderblush-200 w-[1280px] h-11 flex flex-col py-[8.105262756347656px] px-[452px] box-border items-end justify-start text-xl text-black font-brawler">
        <div className="relative flex items-center justify-center w-[374px] h-[26.63px] shrink-0">
          @copyright.Inc
        </div>
      </div>
      <div className="absolute top-[41.6px] left-[639.6px] [backdrop-filter:blur(4px)] box-border w-[2.8px] h-[413.8px] border-r-[2.8px] border-solid border-lavenderblush-200" />
    </div>
  );
};

export default FooterTextareaContainer1;
