import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DCyberContainer from "../component/DCyberContainer";
import FooterTextareaContainer from "../component/FooterTextareaContainer";

const NgoDetails = () => {
  const navigate = useNavigate();

  const onFrameContainer4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavContainerClick = useCallback(() => {
    navigate("/find-your-doctor");
  }, [navigate]);

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHealthSupportText1Click = useCallback(() => {
    navigate("/find-your-doctor");
  }, [navigate]);

  const onContactUsText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactUsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-lavenderblush-200 w-full h-[2141px] overflow-hidden text-center text-25xl text-gray-300 font-montserrat">
      <img
        className="absolute top-[102.85px] left-[419.66px] w-[810.45px] h-[698.3px]"
        alt=""
        src="/bg-illustration1.svg"
      />
      <DCyberContainer />
      <img
        className="absolute top-[824px] left-[155px] rounded-t-none rounded-b-11xl w-[970px] h-[728px] object-cover"
        alt=""
        src="/basemap-image@2x.png"
      />
      <FooterTextareaContainer
        sendTop="1613px"
        onFrameContainer1Click={onFrameContainer4Click}
      />
      <div className="absolute top-[0px] left-[0px] bg-mistyrose-400 w-[1280px] h-[87px] flex flex-row pt-4 px-14 pb-[17px] box-border items-center justify-start gap-[473px]">
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
          className="flex flex-row items-start justify-center gap-[24px] cursor-pointer text-5xl text-red-100 font-cabin"
          onClick={onNavContainerClick}
        >
          <div
            className="relative font-semibold [backdrop-filter:blur(4px)] cursor-pointer"
            onClick={onHomeText1Click}
          >
            Home
          </div>
          <div
            className="relative font-semibold [backdrop-filter:blur(4px)] cursor-pointer"
            onClick={onAboutUsText1Click}
          >
            About Us
          </div>
          <div
            className="relative font-semibold [backdrop-filter:blur(4px)] cursor-pointer"
            onClick={onHealthSupportText1Click}
          >
            Health Support
          </div>
          <div
            className="relative font-semibold [backdrop-filter:blur(4px)] cursor-pointer"
            onClick={onContactUsText2Click}
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoDetails;
