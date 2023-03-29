import React from "react";
import { useCallback } from "react";
import { Button } from "@mui/material";

const NavigationContainer = () => {
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
      <div className="absolute top-[16px] left-[361px] flex flex-row items-start justify-start gap-[19px]">
        <Button
          className="relative"
          sx={{ width: 74 }}
          variant="contained"
          color="error"
          href="/landing-page"
        >
          Home
        </Button>
        <Button
          className="relative cursor-pointer"
          sx={{ width: 106 }}
          variant="contained"
          color="error"
          onClick={onAboutUsClick}
        >
          About Us
        </Button>
        <Button
          className="relative cursor-pointer"
          sx={{ width: 138 }}
          variant="contained"
          color="error"
          onClick={onHelpSupportClick}
        >
          Help Support
        </Button>
        <div
          className="relative font-semibold flex items-center justify-center w-[153px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onHealthSupportText2Click}
        >
          Health Support
        </div>
        <div
          className="relative font-semibold flex items-center justify-center w-[81px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onBlogsText2Click}
        >
          Blogs
        </div>
        <div
          className="relative font-semibold flex items-center justify-center w-[131px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onContactUsText2Click}
        >
          Contact Us
        </div>
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
