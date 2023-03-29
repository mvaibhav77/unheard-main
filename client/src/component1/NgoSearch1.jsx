import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchContainer from "../component/SearchContainer";
import TextareaContainer from "../component/TextareaContainer";

const NgoSearch1 = () => {
  const navigate = useNavigate();

  const onSERVICEContainerClick = useCallback(() => {
    navigate("/ngo-search1");
  }, [navigate]);

  const onButtonSearchClick = useCallback(() => {
    navigate("/ngo-search-spare");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHealthSupportTextClick = useCallback(() => {
    navigate("/find-your-doctor");
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

  const onFeaturesContainerClick = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1517px] overflow-hidden flex flex-col items-center justify-start gap-[84px] text-left text-45xl text-red-100 font-montserrat">
      <SearchContainer
        searchNameText="Search By Name"
        healthSupportText="Health Support"
        rectangle39Cursor="unset"
        rectangle38BackgroundColor="#d70908"
        rectangle38Cursor="unset"
        searchByNameTop="49px"
        searchByNameHeight="54px"
        sERVICEColor="#fff"
        sERVICELeft="36px"
        searchByServiceBackgroundColor="#fff"
        searchByServiceCursor="pointer"
        buttonSearchColor="#d70908"
        rectangle43Cursor="pointer"
        homeJustifyContent="center"
        contactUsWidth="182px"
        logoWidth="137px"
        onSERVICEContainerClick={onSERVICEContainerClick}
        onButtonSearchClick={onButtonSearchClick}
        onHomeTextClick={onHomeTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onHealthSupportTextClick={onHealthSupportTextClick}
        onContactUsTextClick={onContactUsTextClick}
      />
      <div className="w-[1043px] h-[479px] shrink-0 flex flex-col items-start justify-start gap-[52px]">
        <div className="relative font-semibold">
          <span>{`Listed `}</span>
          <span className="text-gray-300">NGO’s-</span>
          <span>{` `}</span>
        </div>
        <div
          className="w-[1043px] h-[349px] shrink-0 flex flex-row items-center justify-start gap-[52px] cursor-pointer"
          onClick={onFeaturesContainerClick}
        >
          <div
            className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 cursor-pointer border-[0.8px] border-solid border-red-100"
            onClick={onRectangle6Click}
          />
          <div
            className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 cursor-pointer border-[0.8px] border-solid border-red-100"
            onClick={onRectangle7Click}
          />
          <div className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 border-[0.8px] border-solid border-red-100" />
        </div>
      </div>
      <TextareaContainer
        propPosition="relative"
        propFlexShrink="0"
        propTop="unset"
        propLeft="unset"
        propLeft1="698px"
        propTop1="43px"
        onFrameContainerClick={onFrameContainerClick}
      />
    </div>
  );
};

export default NgoSearch1;
