import React from "react";
const DoctorListContainer = ({
    onRectangle6Click,
    onRectangle7Click,
    onRectangle8Click,
  }) => {
    return (
      <div className="w-[1043px] h-[465px] shrink-0 flex flex-col items-start justify-start gap-[38px] text-left text-45xl text-red-100 font-montserrat">
        <div className="relative font-semibold">
          <span>{`Meet `}</span>
          <span className="text-gray-300">our</span>
          <span>{` `}</span>
          <span className="text-gray-300">Doctors-</span>
        </div>
        <div className="w-[1043px] h-[349px] shrink-0 flex flex-row items-center justify-start gap-[52px]">
          <div
            className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 cursor-pointer border-[0.8px] border-solid border-red-100"
            onClick={onRectangle6Click}
          />
          <div
            className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 cursor-pointer border-[0.8px] border-solid border-red-100"
            onClick={onRectangle7Click}
          />
          <div
            className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 cursor-pointer border-[0.8px] border-solid border-red-100"
            onClick={onRectangle8Click}
          />
        </div>
      </div>
    );
  };
  
  export default DoctorListContainer;
  