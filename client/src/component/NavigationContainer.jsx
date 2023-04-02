import React from "react";
import { useCallback } from "react";
import { Button } from "@mui/material";

const NavigationContainer = () => {

  const onHomeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='landContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);



  const onAboutUsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='land2Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHelpSupportClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='land3Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHealthSupportText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='land4Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBlogsText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='land5Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='background']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="absolute top-[0px] left-[0px] w-[1139px] h-[54px] text-center text-xl text-red-100 font-cabin">
      <div className="absolute top-[16px] left-[361px] flex flex-row items-start justify-start gap-[19px]" >
        <Button
          className="relative cursor-pointer"
          sx={{ width: 74 }}
          variant="lined"
          color="error"
          onClick={onHomeClick}
        >
          Home
        </Button>
        <Button
          className="relative cursor-pointer"
          sx={{ width: 106 }}
          variant="lined"
          color="error"
          onClick={onAboutUsClick}
        >
          About Us
        </Button>
        <Button
          className="relative cursor-pointer"
          sx={{ width: 160 }}
          variant="LINED"
          color="error"
          onClick={onHelpSupportClick}
        >
          Help Support
        </Button>
        <Button
          className="relative cursor-pointer"
          sx={{ width: 160 }}
          variant="LINED"
          color="error"
          onClick={onHealthSupportText2Click}
        >
          Health Support
        </Button>
        <Button
          className="relative cursor-pointer"
          sx={{ width: 106 }}
          variant="LINED"
          color="error"
          onClick={onBlogsText2Click}
        >
          Blog
        </Button>
        <Button
          className="relative cursor-pointer"
          sx={{ width: 138 }}
          variant="LINED"
          color="error"
          onClick={onContactUsText2Click}
        >
          Contact Us
        </Button>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[167px] h-[54px] text-25xl text-gray-300 font-montserrat">
        <div className="absolute top-[2px] left-[36px] font-semibold flex items-center justify-center w-7 h-[51px]">
          h
        </div>
        <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_83.5px)] font-semibold text-red-100">
          <span>Un</span>
          <span className="text-gray-300">eard</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationContainer;
