import React from "react";
import { Button } from "@mui/material";
import Doctor from './images/doctor.png'


const SearchResultDisplay = ({ name, degree,id, practicing, address}) => {
  return (

      <div 
      
      className="w-[884px] h-auto shrink-0 flex flex-row items-center justify-start gap-[69px]">
        <img
          className="relative w-[233px] h-[233px] shrink-0"
          alt=""
          src={Doctor}
        />
        <div className="relative w-[582px] h-[282px] shrink-0">
          <Button
            className="absolute top-[224px] left-[0px] cursor-pointer"
            sx={{ width: 236 }}
            variant="contained"
            color="error"
            onClick={(e)=>{
              e.preventDefault();
              window.location.replace('/doctors-info?id='+id)
            }}
          >
            View Profile
          </Button>
          <div className="absolute top-[103px] left-[4px] font-medium flex items-center w-[578px] h-autos"></div>
          <div className="absolute top-[0px] left-[4px] w-[171px] h-[71px] flex flex-col items-start justify-start text-21xl text-red-100">
            <div className="relative font-medium">{name}</div>
            <div className="relative text-xl font-medium text-black flex items-center w-[371px] h-[23px] shrink-0 ">
              {degree}
            </div>
          </div>
        </div>
      </div>
  );
};

export default SearchResultDisplay;
