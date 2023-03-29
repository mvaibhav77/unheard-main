import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UnheardContainer from "../component/UnheardContainer";
import FooterTextareaContainer from "../component/FooterTextareaContainer";
import ContributorsContainer from "../component/ContributorsContainer";
import About from './images/about.png'

const ABOUTUS = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavContainerClick = useCallback(() => {
    navigate("/find-your-doctor");
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
      <img
        className="absolute top-[102.85px] left-[419.66px] w-[810.45px] h-[698.3px]"
        alt=""
        src=''
      />
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
            className="relative w-[201px] h-[29px] shrink-0 cursor-pointer text-5xl text-red-100 font-cabin"
            onClick={onNavContainerClick}
          >
            <div
              className="absolute top-[0px] left-[0px] font-semibold [backdrop-filter:blur(4px)] cursor-pointer"
              onClick={onHomeText1Click}
            >
              Home
            </div>
            <div
              className="absolute top-[0px] left-[88px] font-semibold [backdrop-filter:blur(4px)] cursor-pointer"
              onClick={onContactUsText2Click}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <ContributorsContainer />
      <img
        className="absolute top-[1318px] left-[1069px] w-[38px] h-[38px]"
        alt=""
        src={About}
      />
    </div>
  );
};

export default ABOUTUS;
