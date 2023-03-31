import React from "react";
import { Button } from "@mui/material";
import Ellipse from "./images/ellipse.png"

const DurgContainer = ({
  id,
  sectors,
  name,
}) => {
  console.log(name);
  return (
    <div className="w-[1030px] h-[auto] shrink-0 flex flex-col items-center justify-start gap-[32px] text-left text-xs text-gray-300 font-montserrat">
      <div className="relative rounded-6xl bg-lightpink [backdrop-filter:blur(4px)] box-border w-[1031px] h-[236px] shrink-0 border-[1px] border-solid border-red-100">
        <div className="absolute top-[28px] left-[71px] w-[888px] h-[179.07px]">
          <Button
            className="absolute top-[141px] left-[0px] cursor-pointer"
            sx={{ width: 193.41175842285156 }}
            variant="contained"
            color="error"
            href="/ngo-details"
            onClick={(e)=>{
              e.preventDefault();
              window.location.replace('/ngo-details?id='+id);
            }}
            >
            View
          </Button>
          <div className="absolute top-[0px] left-[0px] text-xl font-semibold flex items-center w-[auto]">
            {name}
          </div>
          <div className="absolute top-[54px] left-[0px] text-xs font-semibold inline-block w-[888px] h-[67px]">
            Works in Sector: {sectors.substring(0,500)}...
          </div>
        </div>
        <img
          className="absolute top-[10px] left-[994px] w-[27px] h-[27px]"
          alt=""
          src={Ellipse}
        />
      </div>
    </div>
  );
};

export default DurgContainer;
