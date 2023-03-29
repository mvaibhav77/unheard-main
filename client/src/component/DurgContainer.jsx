import React from "react";
import { Button } from "@mui/material";

const DurgContainer = ({
  onCtaClick,
  onCta1Click,
  onCta2Click,
  onCta3Click,
}) => {
  return (
    <div className="w-[1030px] h-[1036px] shrink-0 flex flex-col items-center justify-start gap-[32px] text-left text-17xl text-gray-300 font-montserrat">
      <div className="relative rounded-6xl bg-lightpink [backdrop-filter:blur(4px)] box-border w-[1031px] h-[236px] shrink-0 border-[1px] border-solid border-red-100">
        <div className="absolute top-[28px] left-[71px] w-[888px] h-[179.07px]">
          <Button
            className="absolute top-[141px] left-[0px] cursor-pointer"
            sx={{ width: 193.41175842285156 }}
            variant="contained"
            color="error"
            href="/ngo-details"
            onClick={onCtaClick}
          >
            View
          </Button>
          <div className="absolute top-[0px] left-[0px] font-semibold flex items-center w-[252.71px]">
            PFA Durg
          </div>
          <div className="absolute top-[54px] left-[0px] text-base font-semibold inline-block w-[888px] h-[67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <img
          className="absolute top-[10px] left-[994px] w-[27px] h-[27px]"
          alt=""
          src="/ellipse-2.svg"
        />
      </div>
      <div className="relative rounded-6xl bg-lightpink [backdrop-filter:blur(4px)] box-border w-[1031px] h-[236px] shrink-0 border-[1px] border-solid border-red-100">
        <div className="absolute top-[28px] left-[71px] w-[888px] h-[179.07px]">
          <Button
            className="absolute top-[141px] left-[0px] cursor-pointer"
            sx={{ width: 193.41175842285156 }}
            variant="contained"
            color="error"
            href="/ngo-details"
            onClick={onCta1Click}
          >
            View
          </Button>
          <div className="absolute top-[0px] left-[0px] font-semibold flex items-center w-[252.71px]">
            PFA Durg
          </div>
          <div className="absolute top-[54px] left-[0px] text-base font-semibold inline-block w-[888px] h-[67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <img
          className="absolute top-[10px] left-[994px] w-[27px] h-[27px]"
          alt=""
          src="/ellipse-2.svg"
        />
      </div>
      <div className="relative rounded-6xl bg-lightpink [backdrop-filter:blur(4px)] box-border w-[1031px] h-[236px] shrink-0 border-[1px] border-solid border-red-100">
        <div className="absolute top-[28px] left-[71px] w-[888px] h-[179.07px]">
          <Button
            className="absolute top-[141px] left-[0px] cursor-pointer"
            sx={{ width: 193.41175842285156 }}
            variant="contained"
            color="error"
            href="/ngo-details"
            onClick={onCta2Click}
          >
            View
          </Button>
          <div className="absolute top-[0px] left-[0px] font-semibold flex items-center w-[252.71px]">
            PFA Durg
          </div>
          <div className="absolute top-[54px] left-[0px] text-base font-semibold inline-block w-[888px] h-[67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <img
          className="absolute top-[10px] left-[994px] w-[27px] h-[27px]"
          alt=""
          src="/ellipse-2.svg"
        />
      </div>
      <div className="relative rounded-6xl bg-lightpink [backdrop-filter:blur(4px)] box-border w-[1031px] h-[236px] shrink-0 border-[1px] border-solid border-red-100">
        <div className="absolute top-[28px] left-[71px] w-[888px] h-[179.07px]">
          <Button
            className="absolute top-[141px] left-[0px] cursor-pointer"
            sx={{ width: 193.41175842285156 }}
            variant="contained"
            color="error"
            href="/ngo-details"
            onClick={onCta3Click}
          >
            View
          </Button>
          <div className="absolute top-[0px] left-[0px] font-semibold flex items-center w-[252.71px]">
            PFA Durg
          </div>
          <div className="absolute top-[54px] left-[0px] text-base font-semibold inline-block w-[888px] h-[67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <img
          className="absolute top-[10px] left-[994px] w-[27px] h-[27px]"
          alt=""
          src="/ellipse-2.svg"
        />
      </div>
    </div>
  );
};

export default DurgContainer;
