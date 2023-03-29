import React from "react";
import { useMemo } from "react";
import { TextField } from "@mui/material";
import Background from'./images/background.png'


const FooterTextareaContainer = ({ sendTop, onFrameContainer1Click }) => {
  const footerStyle = useMemo(() => {
    return {
      top: sendTop,
    };
  }, [sendTop]);

  return (
    <div
      className="absolute top-[1780px] left-[0px] w-[1280px] h-[528px] text-left text-51xl text-gray-300 font-montserrat"
      style={footerStyle}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1280px] h-[528px]"
        alt=""
        src={Background}
      />
      <div className="absolute top-[39px] left-[71px] w-[265px] h-[85.06px]">
        <div className="absolute top-[0px] left-[55px] font-semibold">h</div>
        <div className="absolute top-[calc(50%_-_42.5px)] left-[calc(50%_-_132.5px)] font-semibold text-red-100">
          <span>Un</span>
          <span className="text-gray-300">eard</span>
        </div>
      </div>
      <div
        className="absolute top-[141px] left-[71px] flex flex-col items-start justify-center gap-[12px] cursor-pointer text-9xl text-red-100 font-cabin"
        onClick={onFrameContainer1Click}
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
      <div className="absolute top-[484px] left-[0px] bg-lavenderblush-200 w-[1280px] h-11 flex flex-col py-[8.105262756347656px] px-[452px] box-border items-end justify-start text-center text-xl text-black font-brawler">
        <div className="relative flex items-center justify-center w-[374px] h-[26.63px] shrink-0">
          @copyright.Inc
        </div>
      </div>
      <div className="absolute top-[41.6px] left-[639.6px] [backdrop-filter:blur(4px)] box-border w-[2.8px] h-[413.8px] border-r-[2.8px] border-solid border-lavenderblush-200" />
      <div className="absolute top-[41px] left-[706px] w-[505px] h-[400.47px] text-center text-41xl">
        <div className="absolute top-[0.41px] left-[0px] w-[505px] h-[331px]">
          <div
            className="absolute top-[calc(50%_-_162.5px)] left-[calc(50%_-_252.5px)] font-semibold"
            data-scroll-to="contactUsText"
          >
            <span>Contact</span>
            <span className="text-red-100"> Us</span>
          </div>
          <div className="absolute top-[101.59px] left-[0px] rounded-xl bg-lavenderblush-200 w-[505px] h-[127px] flex flex-col py-[25px] px-[15px] box-border items-start justify-start">
            <TextField
              className="relative"
              sx={{ width: 425 }}
              color="error"
              variant="outlined"
              multiline
              label="pen down your queries.."
              placeholder="Textarea placeholder"
              margin="none"
            />
          </div>
          <div className="absolute top-[254.59px] left-[0px] w-[505px] h-[76px] flex flex-col items-start justify-start gap-[7px] text-left text-5xl text-black">
            <div className="relative font-semibold flex items-center w-[200px] h-[25px] shrink-0">{`Email - `}</div>
            <div className="rounded-2xl bg-lavenderblush-200 w-[505px] h-11 shrink-0 flex flex-col py-0 px-[15px] box-border items-start justify-center">
              <TextField
                className="relative"
                sx={{ width: 425 }}
                color="error"
                variant="outlined"
                multiline
                label="abc@gmail.com"
                placeholder="Textarea placeholder"
                margin="none"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[358.41px] left-[0px] rounded-mini bg-lavenderblush-200 shadow-[0px_1px_2px_rgba(215,_9,_8,_0.7)] [backdrop-filter:blur(4px)] w-40 h-11" />
        <div className="absolute top-[367px] left-[17px] text-5xl font-semibold text-black flex items-center justify-center w-[126px] h-[25px]">
          Send
        </div>
      </div>
    </div>
  );
};

export default FooterTextareaContainer;
