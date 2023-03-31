import React from "react";
import Doctor from './images/doctor.png';
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
        <img
          className="relative w-[300.68px] h-[300.4px] shrink-0 cursor-pointer"
            alt=""
          src = {Doctor}
          onClick={onRectangle6Click}
          />
          <img
          className="relative w-[300.68px] h-[300.4px] shrink-0 cursor-pointer"
            alt=""
          src = {Doctor}
          onClick={onRectangle6Click}
          />

           <img
          className="relative w-[300.68px] h-[300.4px] shrink-0 cursor-pointer"
            alt=""
          src = {Doctor}
          onClick={onRectangle6Click}
          />
          
          
        </div>
      </div>
    );
  };
  
  export default DoctorListContainer;
  