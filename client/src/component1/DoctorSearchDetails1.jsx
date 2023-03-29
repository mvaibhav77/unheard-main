import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchResultDisplay from "../component/SearchResultDisplay";
import ContainerHeader from "../component/ContainerHeader";
import TextareaContainer from "../component/TextareaContainer"

const DoctorSearchDetails1 = () => {
  const navigate = useNavigate();

  const onCtaClick = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onCta1Click = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/find-your-doctor");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHelpSupportTextClick = useCallback(() => {
    navigate("/ngo-search");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1681px] overflow-hidden text-left text-7xl text-black font-montserrat">
      <SearchResultDisplay onCtaClick={onCtaClick} onCta1Click={onCta1Click} />
      <div className="absolute top-[412px] left-[99px] font-medium flex items-center w-[371px] h-[23px]">
        Displaying 2 search result
      </div>
      <ContainerHeader
        helpSupportCursor="pointer"
        contactUsBackgroundColor="#d70908"
        propTop="49px"
        propHeight="54px"
        propColor="#fff"
        propBackgroundColor="#fff"
        propColor1="#d70908"
        onRectangleClick={onRectangleClick}
        onHomeTextClick={onHomeTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onHelpSupportTextClick={onHelpSupportTextClick}
        onContactUsTextClick={onContactUsTextClick}
      />
      <TextareaContainer
        propPosition="absolute"
        propFlexShrink="unset"
        propTop="1153px"
        propLeft="0px"
        propLeft1="716px"
        propTop1="41px"
        onFrameContainerClick={onFrameContainerClick}
      />
    </div>
  );
};

export default DoctorSearchDetails1;
