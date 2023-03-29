import React from "react";
import { useMemo } from "react";

const PatientDetailContainer = ({ propTop }) => {
  const dOCDETAILStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[19px] left-[748px] w-[343px] h-[113px] text-left text-xl text-gray-300 font-montserrat"
      style={dOCDETAILStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-mistyrose-100 shadow-[0px_0.15000000596046448px_2px_rgba(215,_9,_8,_0.7)] [backdrop-filter:blur(4px)] w-[343px] h-[113px]" />
      <div className="absolute top-[27px] left-[29px] w-[216px] h-[58px]">
        <img
          className="absolute top-[0px] left-[0px] w-[58px] h-[58px]"
          alt=""
          src="/ellipse-5.svg"
        />
        <div className="absolute top-[4px] left-[77px] w-[139px] h-[51px]">
          <div className="absolute top-[0px] left-[0px] font-medium">
            Dr. Jadu Tona
          </div>
          <div className="absolute top-[31px] left-[0px] text-base font-medium">
            Tantrik
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailContainer;
