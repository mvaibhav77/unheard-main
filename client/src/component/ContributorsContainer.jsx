import React from "react";

const ContributorsContainer = () => {
    return (
      <div className="absolute top-[1302px] left-[155px] rounded-16xl [background:linear-gradient(#f9d0d2,_#f9d0d2),_linear-gradient(#f9d0d2,_#f9d0d2),_linear-gradient(#f9d0d2,_#f9d0d2),_linear-gradient(#f9d0d2,_#f9d0d2),_#f9d0d2] [backdrop-filter:blur(4px)] box-border w-[970px] h-[395px] text-center text-33xl text-gray-300 font-montserrat border-[1px] border-solid border-red-200">
        <div className="absolute top-[0px] left-[0px] rounded-16xl bg-mistyrose-300 [backdrop-filter:blur(4px)] box-border w-[970px] h-[395px] border-t-[1px] border-solid border-red-200 border-r-[1px] border-l-[1px]" />
        <div className="absolute top-[65px] left-[63px] font-semibold">
          <span>Our</span>
          <span className="text-red-100"> Contributors</span>
        </div>
        <div className="absolute top-[172px] left-[49px] flex flex-row items-start justify-start gap-[48px]">
          <img
            className="relative w-[175px] h-[175px] shrink-0"
            alt=""
            src="/ellipse-6.svg"
          />
          <img
            className="relative w-[175px] h-[175px] shrink-0"
            alt=""
            src="/ellipse-6.svg"
          />
          <img
            className="relative w-[175px] h-[175px] shrink-0"
            alt=""
            src="/ellipse-6.svg"
          />
          <img
            className="relative w-[175px] h-[175px] shrink-0"
            alt=""
            src="/ellipse-6.svg"
          />
        </div>
      </div>
    );
  };
  
  export default ContributorsContainer;
  