import React from "react";
import { Button } from "@mui/material";


const SearchResultDisplay = ({ onCtaClick, onCta1Click }) => {
  return (
    <div className="absolute top-[475px] left-[99px] w-[884px] h-[608px] flex flex-col items-center justify-start gap-[44px] text-left text-5xl text-black font-montserrat">
      <div className="w-[884px] h-[282px] shrink-0 flex flex-row items-center justify-start gap-[69px]">
        <img
          className="relative w-[233px] h-[233px] shrink-0"
          alt=""
          src="/doc-img-1.svg"
        />
        <div className="relative w-[582px] h-[282px] shrink-0">
          <Button
            className="absolute top-[224px] left-[0px] cursor-pointer"
            sx={{ width: 236 }}
            variant="contained"
            color="error"
            href="/doctors-info"
            onClick={onCtaClick}
          >
            View Profile
          </Button>
          <div className="absolute top-[103px] left-[4px] font-medium flex items-center w-[578px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
          <div className="absolute top-[0px] left-[4px] w-[371px] h-[71px] flex flex-col items-start justify-start text-21xl text-red-100">
            <div className="relative font-medium">Dhruv Adavadkar</div>
            <div className="relative text-xl font-medium text-black flex items-center w-[371px] h-[23px] shrink-0 mt-[-1px]">
              PGDA, MBBS
            </div>
          </div>
        </div>
      </div>
      <div className="w-[884px] h-[282px] shrink-0 flex flex-row items-center justify-start gap-[69px]">
        <img
          className="relative w-[233px] h-[233px] shrink-0"
          alt=""
          src="/doc-img-1.svg"
        />
        <div className="relative w-[582px] h-[282px] shrink-0">
          <Button
            className="absolute top-[224px] left-[0px] cursor-pointer"
            sx={{ width: 236 }}
            variant="contained"
            color="error"
            href="/doctors-info"
            onClick={onCta1Click}
          >
            View Profile
          </Button>
          <div className="absolute top-[103px] left-[4px] font-medium flex items-center w-[578px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
          <div className="absolute top-[0px] left-[4px] w-[371px] h-[71px] flex flex-col items-start justify-start text-21xl text-red-100">
            <div className="relative font-medium">Dhruv Adavadkar</div>
            <div className="relative text-xl font-medium text-black flex items-center w-[371px] h-[23px] shrink-0 mt-[-1px]">
              PGDA, MBBS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultDisplay;
