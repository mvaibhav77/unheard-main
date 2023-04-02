import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UnheardContainer from "../component/UnheardContainer";
import FooterTextareaContainer from "../component/FooterTextareaContainer";
import ContributorsContainer from "../component/ContributorsContainer";
import About from './images/about.png'
import Ellipse from './images/ellipse.png'
import { Button } from "@mui/material";

const ABOUTUS = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactUsText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactUsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-gray-100 w-full h-[2308px] overflow-hidden text-center text-25xl text-gray-300 font-montserrat">
      
      <UnheardContainer />
      <img
        className="absolute top-[1329px] left-[1069px] w-[38px] h-[38px]"
        alt=""
        src={About}
      />
      <FooterTextareaContainer
        onFrameContainer1Click={onFrameContainer1Click}
      />
      <div className="absolute top-[0px] left-[0px] bg-mistyrose-400 w-[1280px] h-[87px]">
        <div className="absolute top-[16px] left-[109px] flex flex-row items-center justify-start gap-[667px]">
          <div className="relative w-[167px] h-[54px] shrink-0">
            <div className="absolute top-[2px] left-[36px] font-semibold flex items-center justify-center w-7 h-[51px]">
              h
            </div>
            <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_83.5px)] font-semibold text-red-100">
              <span>Un</span>
              <span className="text-gray-300">eard</span>
            </div>
          </div>
          <div
            className="relative w-[auto] h-[29px] shrink-0 cursor-pointer text-5xl text-red-100 font-cabin"
            onClick={onNavContainerClick}
          >
            <Button
          className="relative cursor-pointer"
          sx={{ width: 80 }}
          variant="LINED"
          color="error"
          onClick={onHomeText1Click}
        >
          Home
        </Button>
        <Button
          className="relative cursor-pointer"
          sx={{ width: 170 }}
          variant="LINED"
          color="error"
          onClick={onContactUsText2Click}
        >
          Contact Us
        </Button>
          </div>
        </div>
      </div>
      <ContributorsContainer />
      <img
        className="absolute top-[1318px] left-[1069px] w-[38px] h-[38px]"
        alt=""
        src={Ellipse}
      />
    </div>
  );
};

export default ABOUTUS;
