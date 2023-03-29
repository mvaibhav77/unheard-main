import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const EmpowermentContainer = () => {
  const navigate = useNavigate();

  const onCtaContainerClick = useCallback(() => {
    navigate("/chat-interface1");
  }, [navigate]);

  const onNgoButtonContainerClick = useCallback(() => {
    navigate("/chat-interface");
  }, [navigate]);

  return (
    <div className="absolute top-[189px] left-[0px] w-[753px] h-[430px] text-left text-13xl text-gray-300 font-montserrat">
      <div className="absolute top-[298px] left-[0px] flex flex-row items-center justify-start text-black">
        <div className="relative tracking-[-0.01em]">
          Helping women find their voice!!
        </div>
      </div>
      <div
        className="absolute top-[377px] left-[0px] h-[53px] flex flex-row items-center justify-start cursor-pointer text-center text-5xl"
        onClick={onCtaContainerClick}
      >
        <div className="rounded-t-none rounded-br-none rounded-bl bg-gainsboro-300 box-border w-[215px] h-[53px] shrink-0 flex flex-col py-0 px-[17px] items-end justify-center border-[2px] border-solid border-red-100">
          <div className="relative font-semibold flex items-center justify-center w-44 h-11 shrink-0">
            Health
          </div>
        </div>
        <div
          className="rounded-t-none rounded-br rounded-bl-none bg-red-100 box-border w-[213px] h-[57px] shrink-0 flex flex-col items-center justify-center cursor-pointer text-white border-[2px] border-solid border-white"
          onClick={onNgoButtonContainerClick}
        >
          <div className="relative font-semibold">NGO’s</div>
        </div>
      </div>
      <b className="absolute top-[0px] left-[0px] text-61xl tracking-[-0.04em] flex items-center w-[753px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">{`Millions of `}</p>
          <p className="m-0">Women’s Voices</p>
          <p className="m-0">
            <span>{`Are `}</span>
            <span className="text-red-100">Never Heard</span>
          </p>
        </span>
      </b>
    </div>
  );
};

export default EmpowermentContainer;
