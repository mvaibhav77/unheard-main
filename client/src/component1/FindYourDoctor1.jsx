import React, { useContext } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchContainer from "../component/SearchContainer";
import DoctorListContainer from "../component/DoctorListContainer";
import TextareaContainer from "../component/TextareaContainer";
import { LocationContext } from "../context/LocationContext";

const HealthSupportContainer = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/find-your-doctor");
  }, [navigate]);

  const onButtonSearchClick = useCallback(() => {
    navigate("/doctors-search-details1");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/Home");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHelpSupportTextClick = useCallback(() => {
    navigate("/ngo-search");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle6Click = useCallback(() => {
    navigate("/doctors-info?id=09TRxSp4eAtPSGgPFpVDt");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/doctors-info?id=06i9MEgYDpUk0VglfTW0");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/doctors-info?id=0DAipwW7Olw5D0wzEgPx");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  console.log('services');

  const {city} = useContext(LocationContext);
  return (
<div className="relative bg-white w-full h-[1475px] overflow-hidden flex flex-col items-center justify-center gap-[70px]">
      <SearchContainer
        searchNameText="Search By Location"
        healthSupportText="Help Support"
        rectangle39Cursor="unset"
        rectangle38BackgroundColor="#fff"
        rectangle38Cursor="pointer"
        searchByNameTop="53px"
        searchByNameHeight="50px"
        sERVICEColor="#d70908"
        sERVICELeft="26px"
        searchByServiceBackgroundColor="#d70908"
        searchByServiceCursor="unset"
        buttonSearchColor=""
        rectangle43Cursor="pointer"
        homeJustifyContent="flex-start"
        contactUsWidth="171px"
        logoWidth="114px"
        onRectangle1Click={onRectangle1Click}
        onButtonSearchClick={onButtonSearchClick}
        onHomeTextClick={onHomeTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onHealthSupportTextClick={onHelpSupportTextClick}
        onContactUsTextClick={onContactUsTextClick}
        type="service"
        forType="doctor"
        loc={city}
      />
      <DoctorListContainer
        onRectangle6Click={onRectangle6Click}
        onRectangle7Click={onRectangle7Click}
        onRectangle8Click={onRectangle8Click}
      />
      <TextareaContainer
        propPosition="relative"
        propFlexShrink="0"
        propTop="unset"
        propLeft="unset"
        propLeft1="710px"
        propTop1="39px"
        onFrameContainerClick={onFrameContainer2Click}
      />
    </div>
  );
};

export default HealthSupportContainer;
