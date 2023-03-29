import { useCallback, useContext, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchResultDisplay from "../component/SearchResultDisplay";
import ContainerHeader from "../component/ContainerHeader";
import TextareaContainer from "../component/TextareaContainer";
import { DoctorContext } from "../context/DoctorsContext";

const DoctorSearchDetails = () => {
  const navigate = useNavigate();

  const onCtaClick = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onCta1Click = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHelpSupportTextClick = useCallback(() => {
    navigate("/ngo-search1");
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

  // const {getLocationResults,
  //   getServiceResults,
  //   result,
  //   setServiceSearched,
  //   setLocationSearched,
  //   serviceSearched,
  //   locationSearched,} = useContext(DoctorContext);


  //   const putResult = ()=>{

  //   }

    // useEffect(()=>{
    //   getLocationResults('Rewa');
    //   console.log(result[0]);
    // },[])

  return (
    <div className="relative bg-white w-full h-[1681px] overflow-hidden text-left text-7xl text-black font-montserrat">
      {/* <SearchResultDisplay onCtaClick={onCtaClick} onCta1Click={onCta1Click} />
      <div className="absolute top-[412px] left-[99px] font-medium flex items-center w-[371px] h-[23px]">
        Displaying 2 search result
      </div> */}
      <ContainerHeader
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

export default DoctorSearchDetails;
