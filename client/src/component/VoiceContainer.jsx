import React from "react";
import { useMemo } from "react";

const VoiceContainer = ({ propLeft }) => {
  const textStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[139px] left-[0px] w-[759px] h-[410px] text-center text-69xl text-gray-300 font-montserrat"
      style={textStyle}
    >
      <div className="absolute top-[371px] left-[0px] text-13xl text-black">{`Helping women & girls find their voice`}</div>
      <b className="absolute top-[244px] left-[0px]">
        <span>Are</span>
        <span className="text-black">{` `}</span>
        <span className="text-red-100">Never Heard</span>
      </b>
      <b className="absolute top-[0px] left-[0px]">Millions of</b>
      <b className="absolute top-[122px] left-[0px]">Women’s Voices</b>
    </div>
  );
};

export default VoiceContainer;
